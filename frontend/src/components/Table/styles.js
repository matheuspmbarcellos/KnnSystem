import styled from "styled-components";

export const ResultadoContainer = styled.div`
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1%;

table,
th,
td {
    border-collapse: collapse;
    position: relative;
    padding: 12px 8px 12px 10px;
    font-size: 12px;
    text-align: start;
}

table {
    background-color: white;
    width: 80%;
    overflow: hidden;
}


.close:hover {
    color: red;
    font-weight: bolder;
}

thead{
    color: limegreen;
}

tbody {
    overflow: auto;

    tr {
        border-top: solid 1px limegreen;
    }

    :hover {
    background: #f1f1f1;
}


`



export const Deletar = styled.button`
background: url(./trash3-fill.svg) no-repeat;
background-size: cover;
border: none;
height: 15px;
width: 15px;

&:hover {
    color: red;
    cursor: pointer;
    }

`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 12px;
width: 60%;
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
    color:  #131129;
    cursor: pointer;
  }
`





export const Detalhar = styled.button`
background: url(./file-earmark-text.svg);
border: none;
height:15px;
width: 15px;
background-size: cover;

&:hover {
    color: #131129;
    cursor: pointer;
    }
`