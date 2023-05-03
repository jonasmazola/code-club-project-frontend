import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div `

background-color: #EFEFEF;
min-height: 100vh;
padding: 20px;

`



export const ImagemProduto = styled.img `
    width: 20%;
    border-radius: 6px;

`

export const ReactSelect = styled(Select) `
width: 244px;

.css-qbdosj-Input {

    cursor: pointer;
}

`

export const Menu = styled.div `
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;


`

export const LinkMenu = styled.a `
    color: ${props => props.isActive ? '#569cd6': '#323d5d'};
    padding-bottom: 10px;
    border-bottom: ${props => props.isActive ? '2px solid #c57971' : ''};
    cursor: pointer;
    font-weight: ${props => props.isActive ? 'bold' : '100'};


`

export const P = styled.div `
display: flex;
justify-content: center;
margin-top: 10px;
font-size: 12px;
`