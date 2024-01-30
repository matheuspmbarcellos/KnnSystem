import styled from "styled-components";


export const FormC = styled.form `
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


export const FormContainer = styled.div`
width: 80%;
height: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const ButtonContainer = styled.div`
width: 25%;
display: flex;
flex-direction: row;
margin-top: 3%;
justify-content: center;
`

export const FInput = styled.input`
margin: 5px;
border-radius: 15px;    
color: #131129;
width: 25%;
padding: 6px;
border: solid 0.6px;
`;

export const FRedirect = styled.div`
width: fit-to-content;
display: flex;
background-color: limegreen;
`;


export const FormBtn = styled.button`
font-weight: bold;
padding: 1.5%;
text-decoration: none;
font-size: 0.9em;
font-color: #131129;
background: none;
border: none;

`
