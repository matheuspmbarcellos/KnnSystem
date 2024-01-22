import { CadastrarContainer, InputContainer, BodyContainer } from "./styles";
import MenuCRUD from "../../../components/MenuCRUD";
import Button from "../../../components/Button/Button";

const CadastrarFornecedor = () => {

  return (
    <CadastrarContainer>
        <h1>FORNECEDORES</h1>
       <MenuCRUD/>
       <BodyContainer>
        <InputContainer> 
        <input type='text' placeholder='CNPJ'/>
        <input type='text' placeholder='Código'/>
        <input type='text' placeholder='Razão Social'/>
        <input type='text' placeholder='Domicílio Bancário'/>
        <input type='text' placeholder='Natureza do Serviço'/>
        </InputContainer> 

        <InputContainer> 
        <input type='text' placeholder='Nome do Responsável'/>
        <input type='text' placeholder='Telefone do Responsável'/>
        <input type='text' placeholder='E-mail do Responsável'/>
        <input type='text' placeholder='E-mail corporativo'/>
        <input type='text' placeholder='Endereço'/>
        </InputContainer> 
        </BodyContainer>
        <Button>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarFornecedor;