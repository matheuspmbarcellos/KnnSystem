import { CadastrarContainer, InputContainer, BodyContainer } from "./styles";
import Fornecedores from "..";
import Form from "../../../components/Form";

const BuscarFornecedor = () => {

  return (
    <CadastrarContainer>
        <Fornecedores/>         
        <BodyContainer>
         <InputContainer> 
         <Form 
          formArr={formArr}
          submitBtn={"Buscar"}   
          linkSubmit={"./ResultadoFornecedor"}
         />
        </InputContainer> 
             </BodyContainer>
    </CadastrarContainer>
  )
}

const formArr = [
  {
    name: "cpnj",
    placeholder: "CNPJ",
  },
  { 
    name: "Cod",
    placeholder: "Código",
  },
  { 
    name: "razao",
    placeholder: "Razão Social",
  },

  { 
    name: "domicilio",
    placeholder: "Domicílio Bancário",
  },
  { 
    name: "natureza",
    placeholder: "Natureza do Serviço",
  },
];

export default BuscarFornecedor;