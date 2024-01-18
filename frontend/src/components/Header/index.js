import { HeaderContainer, Usuario, KNNlogo } from "./styles";

const Header = () => {
  return (
    
    <HeaderContainer>
        <KNNlogo as= "a" href="/"/> 
        <Usuario as= "a" href="/Login" />
    </HeaderContainer>

  )
}


export default Header;

// <KNNlogo src={logo} alt="logo"/> 