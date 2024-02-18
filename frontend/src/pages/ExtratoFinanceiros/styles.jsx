import styled from "styled-components";

export const ExtratosContainer = styled.div`
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

export const BuscaContainer = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

    Button{
        font-size: 11px;
    }
`

export const FormDateContainer = styled.div`
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: #131129;
    
    input {
        border: none;
        color: blue;
        width: 120px;
        padding: 0 3px;
        font-size: 11px;
        font-weight: bold;
        height: 20px;
        margin: 2px;
    }

    input:focus-visible {
        outline: 2px solid limegreen;;
        border-radius: 2px;
      }
`

export const ResultadoExtratoContainer = styled.div`
    font-size: 10px;
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    p {
        font-weight: bold;
        text-align: center;
        border: none;
        width: 70%;
        font-size: 12px; 
        margin-bottom: 10px;  
    }

    h2 {
        background-color: #131129;
        width: 80%;
        color:white;
        padding: 5px;
        font-weight: regular;
        margin-bottom: 1px;
    }

    h3 {
        text-align: right;
        background-color: #131129;
        width: 80%;
        color:white;
        padding: 5px;
        font-weight: regular;
        margin-bottom: 1px;
    }

    .errorMessage {
        margin-top: 40px;
        color: red;
    }

    table {
        padding: 5px;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid limegreen;
    }

    td {
        font-size: 12px;
    }
`