import styled from "styled-components";

export const CadastrarContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

}

h1 {
    font-size: 35px;
    color: #131129;
    margin: 25px 10px 10px 10px;
}

`
export const BodyContainer = styled.form`
width: 50%;
display: flex;
flex-direction: row;
align-items: center;
margin: 2%;
`

export const InputContainer = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;

input {
    width: 90%;
    color: #131129;
    height: 20px;
    padding: 6px;
    border-bottom: 1px solid #131129;
    border-top: none;
    border-left: none;
    border-right: none;

    &:focus {
        color: limegreen;
        outline: none;
    }
`

export const InputContainerRow= styled.div`
width: 95%;
display: flex;
flex-direction: row;
align-items: center;

input {
    width: 90%;
    color: #131129;
    height: 20px;
    padding: 6px;
    border-bottom: 1px solid #131129;
    border-top: none;
    border-left: none;
    border-right: none;

    &:focus {
        color: limegreen;
        outline: none;
    }
`