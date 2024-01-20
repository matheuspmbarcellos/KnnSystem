import { ButtonContainer, LoginContainer } from './styles';
import Button from '../../components/Button/Button';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const { signIn, signed } = useContext(AuthContext)

  const handleSignIn = async (e) => {
    e.preventDefault()
    const data = {
      login,
      password
    };

    await signIn(data);
  }

  if (signed) {
    return <Navigate to="/Home"/>
  } else {
    return (
      <LoginContainer>      
        <h1>Login</h1>
        <form onSubmit={handleSignIn}>
          <input 
          type='text' 
          placeholder=' Login:'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          />
        <input 
          type='password' 
          placeholder=' Senha:'
          value={password}
          onChange={(e) => setPassword(e.target.value)}          
          />
        <ButtonContainer>
            <Button secondary>Esqueci minha senha</Button> 
            <Button type="submit">Entrar</Button> 
        </ButtonContainer>
        </form>
      </LoginContainer>
      
    )
  }
}

export default Login;