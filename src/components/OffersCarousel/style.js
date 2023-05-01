import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
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
&:disabled {
    background-color: #ffffff;
    border: 2px solid #9758a6;
}

&.rec.rec-arrow:disabled {
    color: #9758a6;
}

}


`
export const ContainerItens = styled.div`
display: flex;
flex-direction: column;


p{
   font-weight: 600;
   font-size: 20px; 
}

`

export const CategoriaImg = styled.img`


`

export const Image = styled.img`
width: 200px;
border-radius: 10px;
margin-bottom: 16px;
`

export const Button = styled.button`
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

 &:hover{
    opacity: 0.6;
 }



`