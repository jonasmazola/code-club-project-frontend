import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrency";
import {
    Container, ContainerLeft, ContainerRight,
    ContainerText, PageLink, Line, PageLinkExist
} from "./style";

import CartLogo from '../../assets/img/carrinho.png'
import Pessoa from '../../assets/img/pessoa.png'
import { useUser } from "../../hooks/UserContext";



export function Header() {

    const { push, location: { pathname } } = useHistory()

    const { logout, userData } = useUser()

    console.log(userData)

    const logoutUser = () => {
        logout()
        push('/login')
    }


     return (
        <Container>

            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}> Home</PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('/produtos')}>Produtos</PageLink>
            </ContainerLeft>
            <ContainerRight>
                <PageLink onClick={()=> push('/carrinho')} > <img src={CartLogo} alt="Logo carrinho" /></PageLink>
                <Line />
                <PageLink>  <img src={Pessoa} alt="Logo Pessoa" /></PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExist onClick={logoutUser}>Sair</PageLinkExist>
                </ContainerText>
            </ContainerRight>

        </Container>
    )
}
