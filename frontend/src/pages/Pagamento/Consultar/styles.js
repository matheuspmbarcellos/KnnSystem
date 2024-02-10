import styled from "styled-components";

export const PagamentoContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
}

h1 {
    font-size: 35px;
    color: #131129;
    margin: 45px 10px 10px 10px;
}

`
export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3%;

input {
    color: #131129;
    background-color: #131129;
    border-radius: 6px;    
    width: 30%;
    padding: 6px;
    border: solid 0.6px;
    margin: 1%;

    &:focus {
        color: white;
    }
`