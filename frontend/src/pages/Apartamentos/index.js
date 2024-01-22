import { ApartamentosContainer, InputContainer } from "./styles";
import MenuApartamentos from "../../components/MenuCRUD/MenuApartamentos";
import Button from "../../components/Button/Button";

const Apartamentos = () => {

  return (
    <ApartamentosContainer>
        <h1>APARTAMENTOS</h1>
       <MenuApartamentos/>
        <InputContainer> 
        <input type='text' placeholder=' Número de Controle'/> 
        <input type='text' placeholder=' Número do Apartamento'/>
        <input type='text' placeholder=' Bloco'/>
        </InputContainer> 
        <Button>Exibir</Button>

    </ApartamentosContainer>
  )
}

export default Apartamentos;