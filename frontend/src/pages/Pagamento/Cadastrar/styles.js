import styled from "styled-components";

export const CadastrarContainer = styled.div`
width: 100%;
height: 100%;
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

export const CadastroContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3%;

input {
    width: 50%;
    color: #131129;
    border-radius: 0px;
    border-bottom: 1px solid #131129;
    border-top: none;
    border-left: none;
    border-right: none;

    &:focus {
        color: limegreen;
        outline: none;
    }
`