import { FornecedoresContainer } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";

const Fornecedores = () => {
  return (
    <FornecedoresContainer>
        <h1>FORNECEDORES</h1>
        <MenuCRUD/>
    </FornecedoresContainer>
  )
}


MenuCRUD.defaultProps = {
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