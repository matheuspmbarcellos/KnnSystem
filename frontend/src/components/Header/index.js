import { HeaderContainer } from "./styles";
import {KNNlogo} from "./styles";
import logo from "./KNNlogo.png";


const Header = () => {
  return (

    <HeaderContainer>
      <KNNlogo src={logo} alt="logo"/>
    </HeaderContainer>
  )
}

export default Header;
