import { ApartamentosContainer, InputContainer, menuApartamentos } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";
const Apartamentos = () => {

  return (
    <ApartamentosContainer>
        <MenuCRUD
          titulo = "APARTAMENTOS"
          menuArr = {menuApartamentos}
        />
      
        <InputContainer> 
        </InputContainer> 

    </ApartamentosContainer>
  )
}


export default Apartamentos;