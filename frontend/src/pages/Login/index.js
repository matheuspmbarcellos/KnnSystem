import { LoginContainer } from './styles';

const Login = () => {
  return (
    <LoginContainer>
        <h1>Login</h1>
        <input type='text' placeholder='login:'/>
        <input type='password' placeholder='senha:'/>
        <button>Entrar</button>
    </LoginContainer>
    
  )
}

export default Login;