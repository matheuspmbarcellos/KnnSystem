import { ButtonContainer, MenuButton, MenuC, BContainer } from "./styles";

const MenuCRUD = ({ titulo, menuArr }) => {
  
  return (
   <BContainer>
    <h1>{titulo}</h1>
    <MenuC>
     {menuArr.map(({ link, acao }) => (
          <ButtonContainer>
             <MenuButton as="a" href={link}> {acao} </MenuButton>
         </ButtonContainer>          
  ))}
    </MenuC>
    </BContainer>
  )
  };
  

MenuCRUD.defaultProps = {
  titulo:  "TÍTULO",
  menuArr: [
      {
          acao: "ALTERAR",
          link: "./Home",
      },
  ],
};

    
export default MenuCRUD;