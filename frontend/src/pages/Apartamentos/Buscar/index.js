import { ApartamentosContainer, InputContainer } from "./styles";
import Form from "../../../components/Form";
import Apartamentos from "..";

const BuscarApartamentos = () => {

  return (
    <ApartamentosContainer>
        <Apartamentos/>
        <InputContainer> 
      <Form 
          formArr={formArr}
          submitBtn={"Exibir"}   
          linkSubmit={"./ResultadoApartamentos"}
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

export default BuscarApartamentos;