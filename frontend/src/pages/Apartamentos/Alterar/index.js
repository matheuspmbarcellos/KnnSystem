import Apartamentos from "..";
import { ApartamentosContainer, InputContainer } from "./styles";
import Form from "../../../components/Form";

const AlterarApartamentos = () => {

  return (
    <ApartamentosContainer>
        <Apartamentos/>

        <InputContainer> 
        <Form
          formArr={formArr}
          submitBtn={"Exibir"}   
          linkSubmit={"./AlterarApt"} 
        />
        
        </InputContainer> 

    </ApartamentosContainer>
  )
}


const formArr = [

{
  name: "Número",
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
    


export default AlterarApartamentos;