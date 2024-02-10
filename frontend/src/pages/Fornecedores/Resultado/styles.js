import styled from "styled-components";

export const ResultadoContainer = styled.div`
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