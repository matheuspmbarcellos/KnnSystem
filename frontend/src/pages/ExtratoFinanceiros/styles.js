import styled from "styled-components";

export const ExtratosContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #131129;
    width: 100%;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 3%;

    h1{
        font-stretch: wide;
        padding-bottom: 1%;
    }
`

export const FormContainer = styled.form`
    font-size: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 5%;
    align-items: center;
    font-stretch: condensed;
    font-size: 12px;
    font-weight: 600;
    margin-right: 10%;

    input {
        color:blue;
        border: none;
        width: 70%;
        font-size: 11px;
    }
`
export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;

    Button{
        font-size: 11px;
        height: fit-content;
    }
`