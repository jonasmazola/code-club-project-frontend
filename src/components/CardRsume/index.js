import React, { useState, useEffect } from "react";
import { useCart } from "../../hooks/CartContext";
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from './style'
import { Container } from "./style";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import paths from "../../constants/path";




export function CartResume() {

    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)
    const {push} = useHistory()

    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)


        setFinalPrice(sumAllItems)
    }, [cartProducts, deliveryTax])

    const submitOrdem = async () => {
        const ordemCompra = cartProducts.map(product => {
            return {
                id: product.id,
                quantity: product.quantity,
                name_produto: product.name,
                id_categoria: product.categoria_id,
                path: product.url,
                price: product.price,
                
            }
        })


        await toast.promise(api.post('ordem', { products: ordemCompra }),
            {
                pending: "Realizando seu pedido",
                success: 'Realizado com sucesso',
                error: 'tente novamente'
            }

            
            )

            setTimeout(() => {
                localStorage.removeItem('codeburger:cartInfo')
                push('/produtos')
            }, 2000);



    }



    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="itens">Preço</p>
                    <p className="itens-price">{formatCurrency(finalPrice)}</p>
                    <p className="tax">Taxa de entrega</p>
                    <p className="tax-price">{formatCurrency(deliveryTax)}</p>
                </div>

                <div className="container-botton">
                    <p className="total">Valor total</p>
                    <p className="total-price">{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>

            </Container>
            <Button onClick={submitOrdem}  >Finalizar pedido</Button>
        </div>
    )
}
