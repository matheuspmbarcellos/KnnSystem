import styled from "styled-components";

export const RelatoriosContainer = styled.div`
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

export const Resultado = styled.table`
    width: 95%;
    margin-bottom: 30px;

    th {
        text-align: center;
        font-weight: bold;
        font-size: 11px;
        color: limegreen;
        padding: 10px;
        border-bottom: solid 1px limegreen;
    }


    td {
        text-align: center;
        padding: 10px;
        font-size: 11px;
        font-weight: 100;
        border-bottom: solid 1px #cacaca;
    }

`

export const ButtonContainer = styled.div`
width: 60%;
display: flex;
justify-content: center;
flex-direction: row;
margin: 30px 10px 10px 10px;

}

`