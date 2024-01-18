import { FornecedoresContainer, InputContainer} from "./styles";
import MenuCRUD from "../../components/MenuCRUD";

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
    </FornecedoresContainer>
  )
}

export default Fornecedores;