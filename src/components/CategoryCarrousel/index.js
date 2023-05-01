import React, { useEffect, useState } from "react";
import Categoria from '../../assets/img/categoria.png'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'

import { Container, CategoriaImg, ContainerItens, Image, Button } from "./style";



export function CategoryCaroussel() {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        async function loadCategorias() {
            const { data } = await api.get('categorias')
            

            setCategorias(data)
        }

        loadCategorias()

    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoriaImg src={Categoria} alt="logo da categoria" />

            <Carousel itemsTooShow={4} style={{ width: '90%' }} breakPoints={breakPoints}>
                {
                    categorias.map(categoria => (
                        <ContainerItens key={categoria.id}>
                            <Image src={categoria.url} alt="imagem" />
                            <Button to={{
                                pathname: '/produtos',
                                state: {
                                    categoriaId: categoria.id
                                }
                            }}>{categoria.name}</Button>
                        </ContainerItens>
                    ))
                }
            </Carousel>
        </Container>
    )
}
