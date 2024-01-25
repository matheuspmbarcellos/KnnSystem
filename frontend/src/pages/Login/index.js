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
    
    const data = {
      login,
      password
    };

    await signIn(data.login,data.password);
  }

  if (signed) {
    return <Navigate to="/"/>
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
          required
          />
        <input 
          type='password' 
          placeholder=' Senha:'
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
          required        
          />
        <ButtonContainer>
            <Button secondary="true" as="a" href="/Esqueci">Esqueci minha senha</Button> 
            <Button type="submit">Entrar</Button> 
        </ButtonContainer>
        </form>
      </LoginContainer>
      
    )
  }
}

export default Login;