import { FornecedoresContainer, InputContainer} from "./styles";
import MenuCRUD from "../../components/MenuCRUD";
import Button from "../../components/Button/Button";

const Fornecedores = () => {
  return (
    <FornecedoresContainer>
        <h1>FORNECEDORES</h1>
        <MenuCRUD/>
        <InputContainer> 
        <input type='text' placeholder=' CNPJ'/>
        <input type='text' placeholder=' Código'/>
        <input type='text' placeholder=' Razão Social'/>
        <input type='text' placeholder=' Número do Contrato'/>
        </InputContainer>
        <Button as="a" href="/ResultadoFornecedor">Exibir</Button>
    </FornecedoresContainer>
  )
}


MenuCRUD.defaultProps = {
  menuArr: [
      {
          acao: "BUSCAR",
          link: "./BuscarFornecedores",
      },
      {
        acao: "CADASTRAR",
        link: "./CadastrarFornecedores",
    },
    {
      acao: "ALTERAR",
      link: "./AlterarFornecedores",
  },
  {
    acao: "INATIVAR",
    link: "./InativarFornecedores",
},
  ],
};


export default Fornecedores;