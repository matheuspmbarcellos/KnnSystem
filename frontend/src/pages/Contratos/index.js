import { ContratosContainer, InputContainer } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";

const Contratos = () => {
  return (
    <ContratosContainer>
        <h1>CONTRATOS</h1>
        <MenuCRUD/>
        <InputContainer> 
        </InputContainer> 

    </ContratosContainer>
  )
}

MenuCRUD.defaultProps = {
  menuArr: [
      {
          acao: "BUSCAR",
          link: "./BuscarContratos",
      },
      {
        acao: "CADASTRAR",
        link: "./CadastrarContratos",
    },
    {
      acao: "ALTERAR",
      link: "./AlterarContratos",
  },
  {
    acao: "INATIVAR",
    link: "./InativarContratos",
},
  ],
};

export default Contratos;