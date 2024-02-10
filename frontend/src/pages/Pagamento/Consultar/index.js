import { PagamentoContainer, InputContainer } from "./styles";
import Form from "../../../components/Form";
import Pagamento from "..";

const ConsultarFaturas = () => {

  return (
    <PagamentoContainer>
        <Pagamento/>
        <InputContainer> 
      <Form 
          formArr={formArr}
          submitBtn={"Exibir"}   
          linkSubmit={"./ResultadoFaturas"}
      />
        </InputContainer> 

    </PagamentoContainer>
  )
}

const formArr = [
  {
    name: "NumContrato",
    placeholder: "Número do Contrato",
  },
  { 
    name: "NumFat",
    placeholder: "Número da Fatura",
  },
  { 
    name: "CPNJ",
    placeholder: "CNPJ do Fornecedor",
  },
  { 
    name: "RazSoc",
    placeholder: "Razão social do Fornecedor",
  },
  { 
    name: "Valor",
    placeholder: "Valor",
  },
  { 
    name: "Competencia",
    placeholder: "Competência",
  },
  { 
    name: "Status",
    placeholder: "Status",
  },
];

export default ConsultarFaturas;