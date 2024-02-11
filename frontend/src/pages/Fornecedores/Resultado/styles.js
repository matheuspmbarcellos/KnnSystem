import styled from "styled-components";

export const ResultadoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 40px;
}

h2 {
    margin: 30px auto 30px 80%;
    font-weight: 100;
    font-style: italic; 
    font-size: 95%;
}


`

export const Resultado = styled.table`
    width: 80%;
    margin-bottom: 30px;

    th {
        text-align: center;
        font-weight: bold;
        font-size: 12px;
        color: limegreen;
        padding: 10px;
        border-bottom: solid 1px limegreen;
    }

    td {
        text-align: center;
        padding: 10px;
        font-size: 12px;
        font-weight: 100;
        border-bottom: solid 1px #cacaca;
    }


`