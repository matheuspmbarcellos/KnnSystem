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


export const ButtonContainer = styled.div`
display: block;
flex-direction: row;
width: 100%;
height: 100%:

`

export const Editar = styled.button`
height: 15px;
width: 15px;
background: url(./pencil-square.svg);
background-size: cover;
background-repeat: no-repeat;
border: none;
margin: auto;
&:hover {
    cursor: pointer;
  }
`


export const Exibir = styled.button`
background: url(./file-earmark-text.svg);
border: none;
height:15px;
width: 15px;
background-size: cover;

&:hover {
    cursor: pointer;
    }
`

export const Deletar = styled.button`
background: url(./trash3-fill.svg) no-repeat;
background-size: cover;
border: none;
height: 15px;
width: 15px;

&:hover {
    cursor: pointer;
    }

`