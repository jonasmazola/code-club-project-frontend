import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
background-color: #efefef;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;

.rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    border-radius: 100px;

    &:hover{
        opacity: 0.8;
        
    }

    &:active{
    opacity: 0.4;
}

}


`
export const ContainerItens = styled.div`
display: flex;
flex-direction: column;

`

export const CategoriaImg = styled.img`


`

export const Image = styled.img`
width: 200px;
border-radius: 10px;
`

export const Button = styled(Link)`
margin-top: 16px;
background: #9758a6;
box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
 0px 20px 40px rgba(151, 88, 166, 0.24);
 border-radius: 8px;
 cursor: pointer;
 height: 50px;
 color: #ffffff;
 font-size: 14px;
 border: none;
 font-weight: 600;
 text-decoration: none;
 display: flex;
 align-items: center;
 justify-content: center;


 &:hover{
    opacity: 0.6;
 }



`