import React, { useState } from "react";
import { Container, ContainerItens } from "./style";
import { Ordem } from "./Ordem";
import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import { ListProducts } from "./ListProducts";

export function Admin({ match: {path} }) {






    return (

        <Container>
            <SideMenuAdmin />
            <ContainerItens>

                { path === '/pedidos' ? <Ordem /> : ''}
                { path === '/listar-produtos' ?  <ListProducts /> : ''}
     
               
            </ContainerItens>
        </Container>
    )
}