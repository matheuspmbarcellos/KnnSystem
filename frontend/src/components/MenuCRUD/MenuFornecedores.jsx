import { Link } from "react-router-dom";
import { ButtonContainer, MenuButton } from "./styles";

const MenuFornecedores = () => {
  return (
          <ButtonContainer>
           <Link to={"/BuscarFornecedor"}>
              <MenuButton>BUSCAR</MenuButton>
            </Link>
            <Link to={"/CadastrarFornecedor"}>
              <MenuButton>CADASTRAR</MenuButton>
            </Link>
        </ButtonContainer>
  )
}
    
export default MenuFornecedores;