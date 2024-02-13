import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Usuario, KNNlogo, LoginContainer, UserPerfil, BtnSair } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { nome, perfil, signOut, signed } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <KNNlogo onClick={() => {navigate("/")}} />
      <LoginContainer>
      {signed ? (
          <UserPerfil>
            <p className='userName'>{nome}</p>
            <p className='userProfile'>{perfil}</p>
            <BtnSair onClick={signOut}>sair</BtnSair>
          </UserPerfil>
        ) : null}       
        <Usuario onClick={() => {navigate("/Login")}} />
      </LoginContainer>
    </HeaderContainer>
  );
};

export default Header;