import React, { useState } from "react";
import { Container, ContainerItens } from "./style";
import { Ordem } from "./Ordem";
import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import { ListProducts } from "./ListProducts";
import { NewProduct } from './NewProducts'
import { EditProduct } from "./EditProduct";
import { ListCategory } from "./ListCategory";
import { NewCategory } from './NewCategory'
import { EditCategory } from "./EditCategory";

export function Admin({ match: { path } }) {






    return (

        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItens>

                {path === '/pedidos' ? <Ordem /> : ''}
                {path === '/listar-produtos' ? <ListProducts /> : ''}
                {path === '/novo-produto' ? <NewProduct /> : ''}
                {path === '/editar-produto' ? <EditProduct /> : ''}
                {path === '/listar-categoria' ? <ListCategory /> : ''}
                {path === '/nova-categoria' ? <NewCategory /> : ''}
                {path === '/editar-categoria' ? <EditCategory /> : ''}


            </ContainerItens>
        </Container>
    )
}