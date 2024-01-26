import { Link } from "react-router-dom";
import { FornecedoresContainer, InputContainer} from "./styles";
import MenuFornecedores from "../../../components/MenuCRUD/MenuFornecedores";
import Button from "../../../components/Button/Button";

const Fornecedores = () => {
  return (
    <FornecedoresContainer>
        <h1>FORNECEDORES</h1>
        <MenuFornecedores/>
        <form>
        <InputContainer> 
          <input type='text' placeholder=' CNPJ'/>
          <input type='text' placeholder=' Código'/>
          <input type='text' placeholder=' Razão Social'/>
          <input type='text' placeholder=' Número do Contrato'/>
          <Link to={"/ResultadoFornecedor"}>
            <Button>Exibir</Button>
          </Link>
        </InputContainer>
        </form>
        
    </FornecedoresContainer>
  )
}

export default Fornecedores;