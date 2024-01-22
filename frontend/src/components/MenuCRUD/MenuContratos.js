import { ButtonContainer, MenuButton } from "./styles";

const MenuContratos = () => {
  return (
          <ButtonContainer>
           <MenuButton as="a" href="/Contratos">BUSCAR</MenuButton>
           <MenuButton as="a" href="/CadastrarContrato">CADASTRAR</MenuButton>
           <MenuButton as="a" href="/AlterarContrato">ALTERAR</MenuButton>
           <MenuButton as="a" href="/InativarContrato">INATIVAR</MenuButton>

        </ButtonContainer>
  )
}
    
export default MenuContratos;