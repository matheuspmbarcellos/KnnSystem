import styled from "styled-components";


export const ButtonContainer = styled.div`
width: 60%;
display: flex;
justify-content: center;
flex-direction: row;
margin: 30px 10px 0 10px;

}

`
export const RelatoriosContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
}

h1 {
    font-size: 35px;
    color: #131129;
    margin: 45px 10px 25px 10px;
}

.conteudo {
    width: 95%;
}
`

export const Resultado = styled.table`
width: 100%;
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