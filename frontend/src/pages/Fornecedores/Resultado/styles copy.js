import styled from "styled-components";

export const ResultadoContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2%;
}

h1 {
    margin: 20px auto 10px 80%;
    font-weight: 100;
    font-style: italic; 
    font-size: 95%;
    margin-bottom: 1%;
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


export const Deletar = styled.button`
background: url(./x-circle-fill.svg);
background-repeat: no-repeat;
background-size: 95%;
border: none;
height:10px;
width: 10px;
color: limegreen;

&:hover {
    transform: scale(1.1);
  }
`
;


export const Editar = styled.button`
background: url(./pencil-square.svg);
background-size: 95%;
background-repeat: no-repeat;
border: none;
color: limegreen;

&:hover {
    transform: scale(1.1);
  }
`