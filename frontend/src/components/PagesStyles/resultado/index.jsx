import styled from "styled-components";


export const ActivateButton = styled.button`
    height:20px;
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
    background: url(../ativar.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    border: none;

    &:hover {
        transform: scale(1.1);
    }
`;

export const InactivateButton = styled.button`
    height:20px;
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
    background: url(../desativar.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    border: none;

    &:hover {
        transform: scale(1.1);
    }
`;

export const DetailButton = styled.button`
    height:20px;
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
    background: url(../detail-open.svg);
    background-size: 95%;
    background-repeat: no-repeat;
    border: none;

    &:hover {
        transform: scale(1.1);
    }
`;
export const EditButton = styled.button`
    height:20px;
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
    background: url(../edit-open.svg);
    background-size: 95%;
    background-repeat: no-repeat;
    border: none;

    &:hover {
        transform: scale(1.1);
    }
`;
export const DisableButton = styled.button`
    height:20px;
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
    background: url(../inativar.svg);
    background-size: 95%;
    background-repeat: no-repeat;
    border: none;

    &:hover {
        transform: scale(1.1);
    }
`;
export const DeleteButton = styled.button`
    height:20px;
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
    background: url(../lixeira-xmark.svg);
    background-size: 95%;
    background-repeat: no-repeat;
    border: none;

    &:hover {
        transform: scale(1.1);
    }
`;

export const ResultadoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 40px;
}

.resultado {
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

    .ATIVO {
        margin-left: 2px;
        color: limegreen;
        font-size: 9px;
        font-style: italic;
        font-weight: bold;
    }
    .INATIVO {
        margin-left: 2px;
        color: #b81414;        
        font-size: 9px;
        font-style: italic;
        font-weight: bold;
    }
    .RESCINDIDO {
        margin-left: 2px;
        color: #b81414;        
        font-size: 9px;
        font-style: italic;
        font-weight: bold;
    }
`
