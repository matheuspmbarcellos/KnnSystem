import { CadastrarContainer, InputContainer, BodyContainer } from "../../../components/PagesStyles/cadastrar";
import MenuFornecedores from "../../../components/MenuCRUD/MenuFornecedores";
import Button from "../../../components/Button/Button";

const CadastrarFornecedor = () => {

  return (
    <CadastrarContainer>
        <h1>FORNECEDORES</h1>
        <MenuFornecedores/>
       <BodyContainer>
       <InputContainer> 
        <input type='text' placeholder='Número controle fornecedor'/>
        <input type='date' placeholder='Vigência inicial'/>
        <input type='date' placeholder='Vigência final'/>
        <input type='text' placeholder='Valor mensal inicial'/>
        <input type='text' placeholder='Valor mensal atual'/>
        <input type='text' placeholder='Serviço/Produto'/>
        </InputContainer> 

        <InputContainer> 
        <input type='text' placeholder='Nome do gestor do contrato'/>
        <input type='text' placeholder='CPF do gestor do contrato'/>
        <input type='email' placeholder='E-mail do gestor do contrato'/>
        <input type='email' placeholder='E-mail do síndico'/>
        <input type='text' placeholder='Percentual de multa'/>
        </InputContainer> 
        </BodyContainer>
        <Button>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarFornecedor;