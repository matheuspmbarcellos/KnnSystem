import { ButtonContainer, LoginContainer } from './styles';
import Button from '../../components/Button/Button';

const Login = () => {

  return (
    <LoginContainer>
        <h1>Login</h1>
        <input type='text' placeholder=' Login:'/>
        <input type='password' placeholder=' Senha:'/>

        <ButtonContainer>
             <Button secondary>Esqueci minha senha</Button> 
            <Button>Entrar</Button> 
        </ButtonContainer>

    </LoginContainer>
    
  )
}

export default Login;