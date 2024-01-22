import { ButtonContainer, MenuButton } from "./styles";

const MenuApartamentos = () => {
  return (
          <ButtonContainer>
           <MenuButton as="a" href="/Fornecedores">BUSCAR</MenuButton>
           <MenuButton as="a" href="/CadastrarFornecedor">CADASTRAR</MenuButton>
           <MenuButton as="a" href="/AlterarFornecedor">ALTERAR</MenuButton>
           <MenuButton as="a" href="/InativarFornecedor">INATIVAR</MenuButton>

        </ButtonContainer>
  )
}
    
export default MenuApartamentos;