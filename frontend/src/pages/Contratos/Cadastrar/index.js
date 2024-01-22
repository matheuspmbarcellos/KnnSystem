import { CadastrarContainer, InputContainer, BodyContainer } from "./styles";
import Button from "../../../components/Button/Button";
import MenuContratos from "../../../components/MenuCRUD/MenuContratos";

const CadastrarContrato = () => {

  return (
    <CadastrarContainer>
        <h1>CONTRATOS</h1>
        <MenuContratos/>

       <BodyContainer>
        <InputContainer> 
        <input type='text' placeholder='Número controle fornecedor'/>
        <input type='text' placeholder='Vigência inicial'/>
        <input type='text' placeholder='Vigência final'/>
        <input type='text' placeholder='Valor mensal inicial'/>
        <input type='text' placeholder='Valor mensal atual'/>
        <input type='text' placeholder='Serviço/Produto'/>
        </InputContainer> 

        <InputContainer> 
        <input type='text' placeholder='Nome do gestor do contrato'/>
        <input type='text' placeholder='CPF do gestor do contrato'/>
        <input type='text' placeholder='E-mails do gestor do contrato'/>
        <input type='text' placeholder='E-mail do síndico'/>
        <input type='text' placeholder='Percentual de multa'/>
        </InputContainer> 
        </BodyContainer>
        <Button>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarContrato;