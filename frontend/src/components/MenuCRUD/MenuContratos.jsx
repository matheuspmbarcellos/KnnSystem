import { Link } from "react-router-dom";
import { ButtonContainer, MenuButton } from "./styles";


const MenuContratos = () => {
  return (
          <ButtonContainer>
            <Link to={"/BuscarContratos"}>
              <MenuButton>BUSCAR</MenuButton>
            </Link>
            <Link to={"/CadastrarContratos"}>
              <MenuButton>CADASTRAR</MenuButton>
            </Link>
            <Link to={"/AlterarContratos"}>
              <MenuButton>ALTERAR</MenuButton>
            </Link>
            <Link to={"/ArmazenarContratos"}>
              <MenuButton>ARMAZENAR</MenuButton>
            </Link>
            <Link to={"/RescindirContratos"}>
              <MenuButton>RESCINDIR</MenuButton>
            </Link>
            <Link to={"/InativarContrato"}>
              <MenuButton>INATIVAR</MenuButton>
            </Link>
        </ButtonContainer>
  )

  
}
    
export default MenuContratos;