import { Link } from "react-router-dom";
import { ButtonContainer, MenuButton } from "./styles";

const MenuApartamentos = () => {
  return (
          <ButtonContainer>
            <Link to={"/BuscarApartamento"}>
              <MenuButton>BUSCAR</MenuButton>
            </Link>
            <Link to={"/CadastrarApartamento"}>
              <MenuButton>CADASTRAR</MenuButton>
            </Link>
            <Link to={"/AlterarApartamento"}>
              <MenuButton>ALTERAR</MenuButton>
            </Link>
            <Link to={"/InativarApartamento"}>
              <MenuButton>INATIVAR</MenuButton>
            </Link>
        </ButtonContainer>
  )
}
    
export default MenuApartamentos;