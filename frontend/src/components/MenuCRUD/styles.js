import styled from "styled-components";
import Button from "../../components/Button/Button";

  

export const MenuButton = styled(Button)`
color: #131129;
background: none;
font-weight: lighter;
font-size: 0.8em;
padding: 1%;
margin-bottom: 3%;
margin-top: 3%;

&:hover {
    text-decoration: underline;
    font-weight: bold; 
    cursor: pointer;
}

`;

export const ButtonContainer = styled.div`
width: 80%;
height: 0.8em;
display: flex;
flex-direction: row;
align-items: center;
`

export const MenuC = styled.div`
width: 35%;
display: flex;
flex-direction: row;
align-items: center;
`

export const BContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;

h1 {
    font-size: 35px;
    color: #131129;
    margin: 45px 10px 10px 10px;
    font-style: normal;
}

`
