import Apartamentos from "..";
import { ApartamentosContainer, InputContainer } from "../styles";
import Form from "../../../components/Form";

const InativarApartamentos = () => {

  return (
    <ApartamentosContainer>
        <Apartamentos/>
        <InputContainer> 
      <Form 
          formArr={formArr}
          submitBtn={"Exibir"}    
      />
        </InputContainer> 

    </ApartamentosContainer>
  )
}


const formArr = [
  {
    name: "Controle",
    placeholder: "Número de Controle",
  },
  { 
    name: "Apt",
    placeholder: "Número do Apartamento",
  },
  { 
    name: "Bloco",
    placeholder: "Bloco",
  },
];  
      

export default InativarApartamentos;