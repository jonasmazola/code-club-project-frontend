import React, { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";


const CartContext = createContext({

})


export const CartProvider = ({ children }) => {

    const [cartProducts, setCartaProducts] = useState([])

const updateLocalStorage = async (products) => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
}

    const putProductInCart = async product => {

        const cartIndex = cartProducts.findIndex(prod => prod.id === product.id)

        let newCartProducts = []

        if (cartIndex >= 0) {

            const newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

            setCartaProducts(newCartProducts)

        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartaProducts(newCartProducts)
        }



        await updateLocalStorage (newCartProducts)


    }

    const deleteProducts = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)

        setCartaProducts(newCart)
        await updateLocalStorage(newCart)
    }

    // para adcionar itens ja dentro do carrinho
    const increasseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        })

        setCartaProducts(newCart)
        await updateLocalStorage(newCart)
    }



    // para remover itens da quantidade dentro do carrinho
    const decreasseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {

            const newCart = cartProducts.map(product => {
                return product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
            })

            setCartaProducts(newCart)
            updateLocalStorage(newCart)
        }else {
            deleteProducts(productId)
        }

    }








    useEffect(() => {
        const loadUserDate = async () => {
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')

            if (clientCartData) {
                setCartaProducts(JSON.parse(clientCartData))
            }

        }

        loadUserDate()
    }, [])

    return (
        <CartContext.Provider value={{ putProductInCart, cartProducts, increasseProducts, decreasseProducts }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("User nao valido")
    }

    return context
}



CartProvider.propTypes = {
    children: propTypes.node
}

