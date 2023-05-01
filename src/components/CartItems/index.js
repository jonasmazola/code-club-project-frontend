import React, { useEffect, useState } from "react";

import { useCart } from "../../hooks/CartContext";
import formatCurrency from "../../utils/formatCurrency";


import { Container, Header, Body, EmptyCar } from "./style";




export function CartItems() {

    const { cartProducts, increasseProducts, decreasseProducts } = useCart()

    console.log(cartProducts)
    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: '30px' }}>Quantidade</p>
                <p>Total</p>
            </Header>
            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id} >
                        <img src={product.url} />

                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className="quantity-container">
                            <button onClick={() => decreasseProducts(product.id)}>-</button>
                        <p>{product.quantity}</p>
                            <button onClick={() => increasseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
                ))

            ) : (
                <EmptyCar>Carrinho vazio</EmptyCar>

            )

            }

        </Container>
    )
}
