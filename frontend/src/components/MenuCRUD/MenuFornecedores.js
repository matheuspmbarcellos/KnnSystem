import { Link } from "react-router-dom";
import { ButtonContainer, MenuButton } from "./styles";

const MenuFornecedores = () => {
  return (
          <ButtonContainer>
           <Link to={"/Fornecedores"}>
              <MenuButton>BUSCAR</MenuButton>
            </Link>
            <Link to={"/CadastrarFornecedor"}>
              <MenuButton>CADASTRAR</MenuButton>
            </Link>
            <Link to={"/AlterarFornecedor"}>
              <MenuButton>ALTERAR</MenuButton>
            </Link>
            <Link to={"/InativarFornecedor"}>
              <MenuButton>INATIVAR</MenuButton>
            </Link>

        </ButtonContainer>
  )
}
    
export default MenuFornecedores;