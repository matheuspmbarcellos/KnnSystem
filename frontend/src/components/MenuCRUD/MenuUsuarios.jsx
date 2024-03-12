import { Link } from "react-router-dom";
import { ButtonContainer, MenuButton } from "./styles";

const MenuUsuarios = () => {
  return (
          <ButtonContainer>
            <Link to={"/BuscarUsuario"}>
              <MenuButton>BUSCAR</MenuButton>
            </Link>
            <Link to={"/CadastrarUsuario"}>
              <MenuButton>CADASTRAR</MenuButton>
            </Link>
            <Link to={"/AlterarUsuario"}>
              <MenuButton>ALTERAR</MenuButton>
            </Link>
            <Link to={"/InativarUsuario"}>
              <MenuButton>ATIVAR/INATIVAR</MenuButton>
            </Link>
        </ButtonContainer>
  )
}
    
export default MenuUsuarios;