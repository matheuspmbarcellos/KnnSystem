import { ButtonContainer, MenuButton } from "./styles";

const MenuCRUD = () => {
  return (
          <ButtonContainer>
          <MenuButton  as="a" href="./Home">BUSCAR</MenuButton>
          <MenuButton  as="a" href="./Home">CADASTRAR</MenuButton>
          <MenuButton  as="a" href="./Home">ALTERAR</MenuButton>
          <MenuButton  as="a" href="./Home">INATIVAR</MenuButton>
        </ButtonContainer>
  )
}
    
export default MenuCRUD;