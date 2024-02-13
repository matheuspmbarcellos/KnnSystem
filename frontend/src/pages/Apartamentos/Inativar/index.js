import Apartamentos from "..";
import { ApartamentosContainer, InputContainer } from "./styles";
import Form from "../../../components/Form";

const InativarApartamentos = () => {

  return (
    <ApartamentosContainer>
        <Apartamentos/>
        <InputContainer> 
      <Form 
          formArr={formArr}
          submitBtn={"Exibir"}   
          linkSubmit={"./InativarApt"}
      />
        </InputContainer> 

    </ApartamentosContainer>
  )
}

const formArr = [
  {
    name: "Controle",
    placeholder: "Número de controle",
  },
  { 
    name: "Apt",
    placeholder: "Número do apartamento",
  },
  { 
    name: "Bloco",
    placeholder: "Bloco",
  },

];
export default InativarApartamentos;