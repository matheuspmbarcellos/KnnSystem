import { ButtonContainer, MenuButton, MenuC } from "./styles";

const MenuCRUD = ({ menuArr }) => {
  
  return (
    <MenuC>
     {menuArr.map(({ link, acao }, index) => (
          <ButtonContainer>
             <MenuButton as="a" href={link}> {acao} </MenuButton>
         </ButtonContainer>          
  ))}
    </MenuC>
  )
  };
  

MenuCRUD.defaultProps = {
  menuArr: [
      {
          acao: "ALTERAR",
          link: "./Home",
      },
  ],
};

    
export default MenuCRUD;