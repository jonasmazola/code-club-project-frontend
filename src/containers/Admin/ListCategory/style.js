import styled from "styled-components";
import EditIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';

export const Container = styled.div`
   
   background-color: #ffffff;
   display: flex;
   align-items: center;
   flex-direction: row;
   justify-content: space-around;


`

export const ImgCategoria = styled.div`

img{
   width: 20%;
   border-radius: 10px;
}
`

export const Edite = styled(EditIcon)`
   cursor: pointer;
   color: #6a7bb7;
`

export const Delete = styled(DeleteIcon)`
   cursor: pointer;

`