import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
margin-left: 10px;
border-radius: 20px;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: space-between;

.container-top {
    
    grid-gap: 10px;
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
    'title title'
    'itens itens-price'
    'tax  tax-price';
    
    .title{
    grid-area: title;
    margin-bottom: 20px;
}

.itens{
    grid-area: itens;
}

.itens-price{
    grid-area: itens-price;
}

.tax{
    grid-area: tax;

}

.tax-rice{
    grid-area: tax-price;
    

}

}

.container-botton {
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 18px;
margin-top: 50px;

}





`

export const Button = styled.button`
    width: 100%;
   
    height: 24px;
    margin: 20px auto;
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