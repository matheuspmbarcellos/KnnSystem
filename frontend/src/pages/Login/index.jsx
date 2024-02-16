import { ButtonContainer, LoginContainer } from './styles';
import Button from '../../components/Button/Button';
import ButtonSecondary from '../../components/Button/ButtonSecondary';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const { signIn, signed } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault()
    
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
            <ButtonSecondary onClick={() => navigate("/Esqueci")}>Esqueci minha senha</ButtonSecondary> 
            <Button type="submit">Entrar</Button> 
        </ButtonContainer>
        </form>
      </LoginContainer>
      
    )
  }
}

export default Login;