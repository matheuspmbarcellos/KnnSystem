import { HeaderContainer, Usuario, KNNlogo } from "./styles";

const Header = () => {
  return (

    <HeaderContainer>
             <KNNlogo as="a" href="./Home"></KNNlogo> 
                <Usuario as= "a" href="./Login">
                </Usuario>
    </HeaderContainer>

  )
}


export default Header;

// <KNNlogo src={logo} alt="logo"/> 