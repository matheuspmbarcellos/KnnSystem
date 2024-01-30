import { ButtonContainer, LoginContainer } from './styles';
import Button from '../../../components/Button/Button';
import Form from '../../../components/Form';

const Esqueci = () => {

  return (
    <LoginContainer>
        <h1>Informe o CPF cadastrado</h1>
        <input type='text' placeholder=' CPF:'/>

        <ButtonContainer>
             <Button as="a" href="/Login">Voltar</Button> 
            <Button as="a" href="/">Enviar</Button> 
        </ButtonContainer>
    <Button as="a" href="/EmailEnviado">  enviado</Button>
    </LoginContainer>
    
  )
}

export default Esqueci;