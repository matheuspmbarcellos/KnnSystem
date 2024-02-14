import styled from "styled-components";

export const ExtratosContainer = styled.div`
width: 100%;
`

export const ResultadoContainer = styled.div`
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        border: none;
        font-size: 12px;   
    }



`

export const Resultado = styled.table`
    width: 95%;
    margin-bottom: 30px;
    margin-top: 2%;

    thead {
        background-color: #131129;
        width: 100%;
    }

    th {
        font-size: 12px;
        color: white;
        font-weight: regular;
    }

    td {
        text-align: center;
        padding: 10px;
        font-size: 11px;
        font-weight: 100;
        border-bottom: solid 1.5px #cacaca;
    }

    tr{
        width: 100%;
    }


    `
