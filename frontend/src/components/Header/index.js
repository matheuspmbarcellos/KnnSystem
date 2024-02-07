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
            <p1>{nome}</p1>
            <p2>{perfil}</p2>
            <BtnSair onClick={signOut}>sair</BtnSair>
          </UserPerfil>
        ) : null}       
        <Usuario onClick={() => {navigate("/Login")}} />
      </LoginContainer>
    </HeaderContainer>
  );
};

export default Header;