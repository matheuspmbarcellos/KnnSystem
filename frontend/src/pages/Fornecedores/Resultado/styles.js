import styled from "styled-components";

export const ResultadoContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2%;
}

h2 {
    margin: 20px auto 10px 80%;
    font-weight: 100;
    font-style: italic; 
    font-size: 95%;
    margin-bottom: 5%;
}
`

export const Resultado = styled.table`
    width: 80%;
    margin-bottom: 5%;
    border-bottom: solid 1px limegreen;

    td {
        font-weight: bold;
        font-size: 12px;
        color: limegreen;
        padding-bottom: 10px;
    }

    th {
        font-size: 15px;
        font-weight: 100;
    }


`