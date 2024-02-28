import { Link } from "react-router-dom";
import { ButtonContainer, MenuButton } from "./styles";

const MenuFaturas = () => {
  return (
          <ButtonContainer>
            <Link to={"/ConsultarPagamento"}>
              <MenuButton>CONSULTAR</MenuButton>
            </Link>
            <Link to={"/CadastrarPagamento"}>
              <MenuButton>INCLUIR</MenuButton>
            </Link>
        </ButtonContainer>
  )
}
    
export default MenuFaturas;