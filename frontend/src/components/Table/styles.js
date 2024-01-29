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
background: url();
background-repeat: no-repeat;
background-position: center;
background: url(./x-circle-fill.svg);
background-size: 95%;
border: none;
height: 30px;
width: fit-to-content;
color: limegreen;
padding: 5px;

&:hover {
    color: red;
    cursor: pointer;
    }

`


export const Editar = styled.button`
height:25px;
width: 25px;
color: limegreen;
background-color: black;
background: url(./person-circle.svg);
background-size: 95%;
background-repeat: no-repeat;
border: none;
margin: auto;

&:hover {
    color: black;
    cursor: pointer;

  }
`





export const Detalhar = styled.button`
background: url(./file-view.svg);
color: limegreen;
padding: 5px;
border: none;
height:17px;
width: fit-to-content;

&:hover {
    color: #131129;
    cursor: pointer;
    }
`