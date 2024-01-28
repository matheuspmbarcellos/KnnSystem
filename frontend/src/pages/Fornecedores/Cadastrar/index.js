import { CadastrarContainer, InputContainer, BodyContainer } from "./styles";
import Button from "../../../components/Button/Button";
import Fornecedores from "..";

const CadastrarFornecedor = () => {

  return (
    <CadastrarContainer>
        <Fornecedores/>         
            <BodyContainer>
              <InputContainer> 
                 <input type='text' placeholder='Nome do Responsável'/>
                 <input type='text' placeholder='Telefone do Responsável'/>
                 <input type='email' placeholder='E-mail do Responsável'/>
                 <input type='email' placeholder='E-mail corporativo'/>
                 <input type='text' placeholder='Endereço'/>
               </InputContainer> 
            </BodyContainer>
        <Button>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarFornecedor;