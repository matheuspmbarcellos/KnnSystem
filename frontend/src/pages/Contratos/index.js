import { ContratosContainer, InputContainer, menuContratos } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";

const Contratos = () => {
  return (
    <ContratosContainer>
        <MenuCRUD
          titulo = "CONTRATOS"
          menuArr = {menuContratos}
        />
        <InputContainer> 
        </InputContainer> 

    </ContratosContainer>
  )
}


export default Contratos;