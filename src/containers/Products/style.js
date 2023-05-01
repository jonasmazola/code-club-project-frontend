import styled from "styled-components";

export const Container = styled.div `
min-height: 100vh;
background: #e5e5e5;
`
export const ProductsContainer = styled.div `
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 20px;
padding: 40px;
justify-items: center;


`

export const Menu = styled.div `
display: flex;
justify-content: center;
gap: 30px;
margin-top: 20px;

`

export const ProductImg = styled.img `
width: 100%;

`

export const CategoryButton = styled.button `
cursor: pointer;
background: none;
border: none;
padding-bottom: 4px;
border-bottom: ${props => props.isActiveCategory ? '2px solid #9758a6' : '#9a9a9d' }; 
color: ${props => props.isActiveCategory ? '#9758a6' : '#9a9a9d' }; 

`