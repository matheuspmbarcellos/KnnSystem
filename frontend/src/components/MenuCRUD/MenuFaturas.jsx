import { Link } from "react-router-dom";
import { ButtonContainer, MenuButton } from "./styles";

const MenuFaturas = () => {
  return (
          <ButtonContainer>
            <Link to={"/ConsultarFatura"}>
              <MenuButton>CONSULTAR</MenuButton>
            </Link>
            <Link to={"/CadastrarFatura"}>
              <MenuButton>INCLUIR</MenuButton>
            </Link>
        </ButtonContainer>
  )
}
    
export default MenuFaturas;