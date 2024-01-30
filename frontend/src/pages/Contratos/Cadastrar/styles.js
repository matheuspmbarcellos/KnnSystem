import styled from "styled-components";

export const CadastrarContainer = styled.div`
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
export const BodyContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
align-items: start;
margin: 2%;
`

export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 1%;

input {
    width: 90%;
    color: #131129;
    height: 5%;
    padding: 6px;
    border-bottom: 1px solid #131129;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 1%;
    border-radius: 0;    

    &:focus {
        color: limegreen;
        outline: none;
    }
`