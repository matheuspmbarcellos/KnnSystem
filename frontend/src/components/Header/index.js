import { HeaderContainer, Usuario, KNNlogo, LoginContainer } from "./styles";

const Header = () => {
  return (
    
    <HeaderContainer>
            <KNNlogo as="a" href="./" /> 
            <LoginContainer>
                
            </LoginContainer> 
            <Usuario as= "a" href="./Login" />
    </HeaderContainer>

  )
}


export default Header;

