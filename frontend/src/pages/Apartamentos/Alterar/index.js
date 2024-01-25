import Apartamentos from "..";
import { ApartamentosContainer, InputContainer } from "../styles";

const AlterarApartamentos = () => {

  return (
    <ApartamentosContainer>
        <Apartamentos/>
        <InputContainer> 
        <h1>Razão Social</h1>
        <h2>Nome</h2>
        <h3>Dados</h3>

        </InputContainer> 
    </ApartamentosContainer>
  )
}


export default AlterarApartamentos;