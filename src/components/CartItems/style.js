import styled from "styled-components";

export const Container = styled.div`
background-color: #FFFFFF;
border-radius: 20px;
padding: 10px;
width: max-content;
height: max-content;



`


export const Header = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px;

border-bottom: 1px solid #b5b5b5;





`


export const Body = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px;

grid-gap: 10px 10px;

img{
    width: 80px;
    border-radius: 10px;
}

.quantity-container{
 display: flex;
 gap: 20px;
    
 button {
    height: 30px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
 }

 p{
    margin-top: 6px;
 }

}


`

export const EmptyCar = styled.p`

font-weight: bold;
font-size: 16px;
text-align: center;
padding: 10px;

`