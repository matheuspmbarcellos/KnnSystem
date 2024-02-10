import { CadastrarContainer, CadastroContainer } from "./styles";
import Form from "../../../components/Form";
import Pagamento from "..";


const IncluirFaturas = () => {

  return (
    <CadastrarContainer>
        <Pagamento/>
        <CadastroContainer>
        <Form
          formArr={formArr}
          submitBtn={"Enviar"}   
          linkSubmit={"./ResultadoFaturas"} 
      />
      </CadastroContainer>
    </CadastrarContainer>
  )
 
}


const formArr = [

  {
    name: "NumCont",
    placeholder: "Número do Contrato",
  },
  { 
    name: "NumFat",
    placeholder: "Número da Fatura",
  },
  { 
    name: "CNPJ",
    placeholder: "CNPJ do Fornecedor",
  },
  { 
    name: "RazSoc",
    placeholder: "Razão Social do Fornecedor",
  },
  { 
    name: "Valor",
    placeholder: "Valor",
  },

];  
      

export default IncluirFaturas;