import styled from "styled-components";
import EditIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   form {
      background: #2b2c40;
      color: white;
      padding: 20px;
      /* margin: 10px; */
      border-radius: 20px;
   }
   
   

`

export const Label = styled.p`
margin: 20px 0 4px 10px;

`

export const LabelUpload = styled.label `
cursor: pointer;
display: flex;
align-items: center;
border: 1px dashed #ffffff;
border-radius: 5px;
padding: 10px;
margin:40px 0 30px 0;

input { 
   opacity: 0;
   width: 1px;
 
   
  
}


`

export const Input = styled.input`
border: none;
border-radius: 10px;
height: 30px;
width: 100%;
padding-left: 10px;




`

export const InputCheckbox = styled.input `
margin: 20px 0 0 10px;
cursor: pointer;
height: 20px;
width: 20px;


`
