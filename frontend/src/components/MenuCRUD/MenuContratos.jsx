import { Link } from "react-router-dom";
import { ButtonContainer, MenuButton } from "./styles";


const MenuContratos = () => {
  return (
          <ButtonContainer>
            <Link to={"/BuscarContrato"}>
              <MenuButton>BUSCAR</MenuButton>
            </Link>
            <Link to={"/CadastrarContrato"}>
              <MenuButton>CADASTRAR</MenuButton>
            </Link>

        </ButtonContainer>
  )
}
    
export default MenuContratos;