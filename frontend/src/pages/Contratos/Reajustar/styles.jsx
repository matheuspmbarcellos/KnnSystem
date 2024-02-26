import styled from "styled-components";

export const CadastrarContainer = styled.div`
display: flex;
flex-direction: column;

h1 {
    font-size: 35px;
    color: #131129;
    margin-left: 5%;

}
.warning {
    background-color: #b81414;
    &:hover {
        color: #111111; 
        cursor: pointer;
    }
}


`
export const BodyContainer = styled.form`
width: 80%;
display: flex;
flex-direction: column;
margin-left: 4%;
margin-top: 2%;
margin-bottom: 4%;
`

export const CheckboxContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 13px;
color: #131129;
align-items: center;

label{
    padding-right: 2%;
    padding-left: .5%;
    }

}
`

export const ResultadoContainer = styled.div`
display: flex;
flex-direction: row;
margin-left: 6%;

h3{
    padding-left: 5px;
    font-size: 15px;
    color: red;
}
`
export const FormContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 2%;

input {
    width: 50%;
    border-bottom: 1px solid #131129;
    border-top: none;
    border-left: none;
    border-right: none;

    &:focus {
        color: red;
        outline: none;
    }
}
`