import styled from "styled-components";
import EditIcon from '@mui/icons-material/Mode';

export const Container = styled.div`
   
   background-color: #ffffff;
   display: flex;
   align-items: center;
   flex-direction: row;
   justify-content: space-around;


`

export const ImgProduto = styled.div `


img{
   width: 20%;
   border-radius: 10px;
}

`

export const Edite = styled(EditIcon) `
   cursor: pointer;
   color: #6a7bb7;
`