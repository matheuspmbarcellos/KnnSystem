import Apartamentos from "..";
import { CadastrarContainer, CadastroContainer } from "./styles";
import Form from "../../../components/Form";

const CadastrarApartamentos = () => {

  return (
    <CadastrarContainer>
        <Apartamentos/>
        <CadastroContainer>
        <Form
          formArr={formArr}
          submitBtn={"Enviar"}   
          linkSubmit={"./ResultadoApartamentos"} 
      />
      </CadastroContainer>
    </CadastrarContainer>
  )
 
}


const formArr = [

  {
    name: "Número",
    placeholder: "Número do Apartamento",
  },
  { 
    name: "Bloco",
    placeholder: "Bloco",
  },
  { 
    name: "Proprietário",
    placeholder: "Nome do Proprietário",
  },
  { 
    name: "Morador",
    placeholder: "Nome do Morador",
  },
  { 
    name: "Metragem",
    placeholder: "Metragem do imóvel",
  },

];  
      

export default CadastrarApartamentos;