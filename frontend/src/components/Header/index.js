import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Usuario, KNNlogo, LoginContainer } from './styles';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <KNNlogo onClick={() => {navigate("/")}} />
      <LoginContainer>

      </LoginContainer>
      <Usuario onClick={() => {navigate("/Login")}} />
    </HeaderContainer>
  );
};

export default Header;