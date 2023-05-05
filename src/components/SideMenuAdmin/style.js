import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
background: #2b2c40;
width: 300px;
top: 0;
left: 0;

hr {
   margin: 50px 15px;
}



`

export const ItemContainer = styled.div `

   height: 50px;
   display: flex;
   align-items: center;
   background: ${props => props.isActive ? '#6a7bb7' : 'none'};
   border-radius: 10px;
   margin: 10px;
   padding-left: 20px;

    .icon {
      color: white;
    }

`


export const ListLinkItem = styled(Link) `

    color: #ffffff;
    text-decoration: none;
    cursor:pointer;
    margin-left: 10px;
    font-size: 20px;



`
