import styled from "styled-components";

export const PageContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    }

    h1 {
        font-size: 35px;
        color: #131129;
        margin: 45px 10px 10px 10px;
        font-style: normal;
    }

    form {
        width: 100%;    
    }
`
export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15px;

input{
    color: white;
    background-color: #131129;
    border-radius: 5px;    
    height: 5%;
    width: 30%;
    padding: 6px;
    border: solid 0.6px;
    margin-bottom:14px;

    &:focus {
        color: white;
    }
`