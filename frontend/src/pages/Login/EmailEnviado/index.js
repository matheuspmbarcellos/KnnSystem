import { ButtonContainer, LoginContainer } from './styles';
import Button from '../../../components/Button/Button';

const EmailEnviado = () => {

  return (
    <LoginContainer>
        <h1>Um link para a redefinição da senha foi enviado para o e-mail registrado!</h1>
        <ButtonContainer>
             <Button as="a" href="/Login">Voltar</Button> 
        </ButtonContainer>
    </LoginContainer>
    
  )
}

export default EmailEnviado;