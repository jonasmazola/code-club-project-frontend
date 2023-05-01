import styled from "styled-components";

export const Container = styled.div`
   height: 72px;
   background-color: #ffffff;
   display: flex;
   align-items: center;
   flex-direction: row;
   justify-content: space-around;


`

export const ContainerLeft = styled.div `
   display: flex;
   gap: 30px;


`

export const ContainerRight = styled.div `

   display: flex;
   align-items:center;
   gap: 20px;



`

export const PageLink = styled.a `
cursor: pointer;
text-decoration: none;
color: ${props => props.isActive ? '#9758a6' : '#555555'} ;
font-weight: ${props => props.isActive ? 'bold': 'normal'};


`


export const PageLinkExist = styled.a `
cursor: pointer;
text-decoration: none;
color: #733a81;
font-weight: 800;


`


export const Line = styled.div `
height: 40px;
border-right: 0.5 solid black;


`

export const ContainerText = styled.div `


`


