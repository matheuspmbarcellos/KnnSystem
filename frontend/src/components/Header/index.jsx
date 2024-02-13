import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Usuario, KNNlogo, LoginContainer, UserPerfil, BtnSair } from './styles';


const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <KNNlogo onClick={() => {navigate("/")}} />
      <LoginContainer>
      
          <UserPerfil>
            <p className='userName'>nome</p>
            <p className='userProfile'>perfil</p>
            <BtnSair onClick={() => {}}>sair</BtnSair>
          </UserPerfil>      
        <Usuario onClick={() => {navigate("/Login")}} />
      </LoginContainer>
    </HeaderContainer>
  );
};

export default Header;