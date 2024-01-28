import styled from "styled-components";

export const CadastrarContainer = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
}


`
export const BodyContainer = styled.div`
width: 50%;
display: flex;
flex-direction: row;
align-items: center;
margin: 3%;
`

export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

input {
    margin: 6px;
    border-radius: 15px;    
    color:white;
    background-color:#131129;
    width: 70%;
    padding: 6px;
    border: solid 0.6px;

    &:focus {
        color: limegreen;
        outline: none;
    }
`