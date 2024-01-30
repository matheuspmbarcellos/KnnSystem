import { CadastrarContainer, InputContainer, BodyContainer } from "./styles";
import Contratos from "..";
import Form from "../../../components/Form";

const CadastrarContrato = () => {

  return (
    <CadastrarContainer>
      <Contratos/>
       <BodyContainer>
      
        <InputContainer> 
        <Form
          formArr={formArr}
          submitBtn={"Cadastrar"}   
          linkSubmit={"./CadastroContrato"}
      />
        </InputContainer> 

        </BodyContainer>
    </CadastrarContainer>
  )
}

const formArr = [

  {
    name: "ValorIn",
    placeholder: "Valor mensal inicial",
  },
  { 
    name: "ValorAtual",
    placeholder: "Valor mensal atual",
  },

  { 
    name: "Servico",
    placeholder: "Serviço/Produto",
  },  

    {
      name: "Gestor",
      placeholder: "Nome do gestor do contrato",
    },
    { 
      name: "CPF",
      placeholder: "CPF do gestor do contrato",
    },
    { 
      name: "Email",
      type: "email",
      placeholder: "E-mail do gestor do contrato",
    },
    { 
      name: "EmailS",
      type: "email",
      placeholder: "E-mail do síndico",
    },
    { 
      name: "ValorAtual",
      placeholder: "Valor mensal atual",
    },
  
    { 
      name: "Multa",
      placeholder: "Percentual de multa",
    },
  ];
export default CadastrarContrato;