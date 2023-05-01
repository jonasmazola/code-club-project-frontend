import styled from "styled-components";

export const Container = styled.div`
padding: 16px;
border-radius: 34px;
background: #ffffff;
box-shadow: 0px 30px 60px rgba(58, 57, 57, 0.1);
display:flex;
gap: 12px;


div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

`

export const Image = styled.img`
border-radius: 14px;
width: 150px;
`

export const ProductName = styled.p`


`

export const ProductPrice = styled.p`

margin-top: 30px;

`

export const Button = styled.button`

    width: 100px;
    height: 24px;
    background: #9758a6;
    color: #ffffff;
    font-weight: 400;
    border-radius: 20px;
    border: none;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }

    :active {
        opacity: 0.4;
    }
`