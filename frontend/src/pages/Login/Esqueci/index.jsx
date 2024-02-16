import { ButtonContainer, LoginContainer } from './styles';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Esqueci = () => {
  const navigate = useNavigate()

  return (
    <LoginContainer>
        <h1>Informe o CPF cadastrado</h1>
        <input type='text' placeholder=' CPF:'/>

        <ButtonContainer>
             <Button onClick={() => navigate("/Login")}>Voltar</Button> 
            <Button>Enviar</Button> 
        </ButtonContainer>

    </LoginContainer>
    
  )
}

export default Esqueci;