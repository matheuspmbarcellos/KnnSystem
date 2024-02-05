import { FornecedoresContainer } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";

const Fornecedores = () => {
  return (
    <FornecedoresContainer>
        <MenuCRUD/>
    </FornecedoresContainer>
  )
}


MenuCRUD.defaultProps = {
  titulo: "FORNECEDORES",

  menuArr: [
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
  ],
};


export default Fornecedores;