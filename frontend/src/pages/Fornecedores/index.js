import { FornecedoresContainer, InputContainer} from "./styles";
import MenuFornecedores from "../../components/MenuCRUD/MenuFornecedores";
import Button from "../../components/Button/Button";

const Fornecedores = () => {
  return (
    <FornecedoresContainer>
        <h1>FORNECEDORES</h1>
        <MenuFornecedores/>
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

export default Fornecedores;