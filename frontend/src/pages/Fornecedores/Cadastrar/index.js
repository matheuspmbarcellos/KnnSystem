import { CadastrarContainer, InputContainer, BodyContainer } from "./styles";
import Fornecedores from "..";
import Form from "../../../components/Form";

const CadastrarFornecedor = () => {

  return (
    <CadastrarContainer>
        <Fornecedores/>         
            <BodyContainer>
              <InputContainer> 
               <Form
                 formArr={formArr}
                  submitBtn={"Cadastrar"}   
                 linkSubmit={"./Fornecedores"} 
               />
               </InputContainer> 
            </BodyContainer>
    </CadastrarContainer>
  )
}

const formArr = [

  {
    name: "nome",
    placeholder: "Nome do Responsável",
  },
  { 
    name: "tel",
    placeholder: "Telefone do Responsável",
  },
  { 
    name: "email",
    placeholder: "E-mail do Responsável",
  },
  { 
    name: "emailcor",
    placeholder: "E-mail Corporativo",
  },
  { 
    name: "endereco",
    placeholder: "Endereço",
  },
  ];  
      
export default CadastrarFornecedor;