import { ApartamentosContainer, InputContainer } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";
import Button from "../../components/Button/Button";

const Apartamentos = () => {
  return (
    <ApartamentosContainer>
        <h1>APARTAMENTOS</h1>
       <MenuCRUD/>
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