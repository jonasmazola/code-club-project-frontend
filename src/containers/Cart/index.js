import React from "react";
import CartLogo from '../../assets/img/cartLogo.png'

import { Container, CartImg, Wrapper } from "./style";
import { CartItems,CartResume } from "../../components";

export function Cart() {
    return (
        <Container>
            <CartImg src={CartLogo} alt="logo da home" />
            <Wrapper>
                
                <CartItems />
                <CartResume />

            </Wrapper>
        </Container>
    )
}

