import { ContratosContainer, InputContainer } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";

const Contratos = () => {
  return (
    <ContratosContainer>
        <MenuCRUD/>
        <InputContainer> 
        </InputContainer> 

    </ContratosContainer>
  )
}

MenuCRUD.defaultProps = {
  titulo: "CONTRATOS",
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