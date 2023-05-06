import styled from "styled-components";
import BackGroundImg from '../../assets/img/Group 7322.png'

export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url('${BackGroundImg}');
display: flex;
justify-content: center;
align-items: center;
`

export const LoginImage = styled.img`
    height: 66%;
`

export const ContainerItens = styled.div`
height: 66%;
    background: #373737;
    box-shadow: 0px 4px 15px;
    border-radius: 0 10px 10px 0;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
        color: #FFFFFF;
        text-align: center;
        margin: 20px;
        
    }

    #form { 
        display: flex;
        flex-direction: column;
    }

    
`


export const Label = styled.p`
color: #FFFFFF;
margin: 28px 0 0 10px;

`

export const Input = styled.input`
    width: 100%;
    height: 14%;
    margin-top: 4px;
    padding-left: 10px;
    border: ${ props => (props.error ? '2px solid red' : 'none')};
    border-radius: 4px;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    outline: none;

`


export const EntrarLink = styled.div`
font-size: 16px;
color: white;
font-weight: 100;
margin: 20% 0 0 10px;

a{
    text-decoration: none;
    color: white;
    font-size: 12px;
    font-weight: 400;
}

a:hover{
    color: #9758a6;
}


`
