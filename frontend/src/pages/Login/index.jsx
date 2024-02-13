import { ButtonContainer, LoginContainer } from './styles';
import Button from '../../components/Button/Button';
import ButtonSecondary from '../../components/Button/ButtonSecondary';
import { useState } from 'react';

const Login = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = async (e) => {
    e.preventDefault()
  }

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
          autoComplete='username'
          />
        <input 
          type='password' 
          placeholder=' Senha:'
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
          required   
          autoComplete='current-password'    
          />
        <ButtonContainer>
            <ButtonSecondary as="a" href="/Esqueci">Esqueci minha senha</ButtonSecondary> 
            <Button type="submit">Entrar</Button> 
        </ButtonContainer>
        </form>
      </LoginContainer>
      
    )
}

export default Login;