import React from "react";
import PropTypes from 'prop-types'
import { Container, Image, ProductName, ProductPrice, Button } from './style'
import { useCart } from "../../hooks/CartContext";
import { useHistory } from "react-router-dom";

export function CardProduct({ product }) {
    const { putProductInCart } = useCart()
    const {push} = useHistory()

    return (
        <Container>
            <Image src={product.url} alt="Produto alternativo" />
            <div>
                <ProductName> {product.name} </ProductName>
                <ProductPrice> {product.formatedPrice} </ProductPrice>
                <Button onClick={() => {
                                putProductInCart(product)
                                push('/carrinho')
                            }}>Adcionar</Button>
            </div>
        </Container>
    )
}

// export default CardProduct