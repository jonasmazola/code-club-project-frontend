import React, { useEffect, useState } from "react";
import ProductLogo from '../../assets/img/logoMenu.png'
import api from '../../services/api'
import formatCurrency from "../../utils/formatCurrency";

import { Container, ProductImg, CategoryButton, Menu, ProductsContainer } from "./style";
import { CardProduct } from "../../components";

export function Products({ location: { state } }) {
    let categoriaId = 0

    if(state?.categoriaId){
        categoriaId = state.categoriaId
    }

    const [categorias, setCategorias] = useState([])
    const [activeCategory, setactiveCategory] = useState(categoriaId)
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {

        async function loadCategorias() {
            const { data } = await api.get('categorias')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]
            setCategorias(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })


            setProducts(newProducts)
        }

        loadProducts()
        loadCategorias()

    }, [])



    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {

            const newFilteredProducts = products.filter(
                product => product.categoria_id === activeCategory
            )
            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])


    return (
        <Container>
            <ProductImg src={ProductLogo} alt="logo de produtos" />
            <Menu>

                {categorias && categorias.map(category => (
                    <CategoryButton type="button" key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => { setactiveCategory(category.id) }} >  {category.name}</CategoryButton>

                ))}
            </Menu>
            <ProductsContainer>
                {filteredProducts && filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />

                ))}
            </ProductsContainer>
        </Container >
    )
}
