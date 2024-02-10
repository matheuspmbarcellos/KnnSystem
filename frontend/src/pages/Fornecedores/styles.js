import styled from "styled-components";


export const menuFornecedores = 
 [
      {
          acao: "BUSCAR",
          link: "./BuscarFornecedor",
      },
      {
        acao: "CADASTRAR",
        link: "./CadastrarFornecedor",
    },
    {
      acao: "ALTERAR",
      link: "./AlterarFornecedor",
  },
  {
    acao: "INATIVAR",
    link: "./InativarFornecedor",
},
];

  
export const FornecedoresContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

}


`
export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3%;

input{
    color: #131129;
    background-color: #131129;
    border-radius: 5px;    
    height: 5%;
    width: 30%;
    padding: 6px;
    border: solid 0.6px;
    margin: 0.7%;

    &:focus {
        color: white;
    }
`