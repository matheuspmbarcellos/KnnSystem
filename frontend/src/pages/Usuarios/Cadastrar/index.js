import { CadastrarContainer, InputContainer, BodyContainer } from "../../../components/PagesStyles/cadastrar";
import MenuUsuarios from "../../../components/MenuCRUD/MenuUsuarios";
import Button from "../../../components/Button/Button";

const CadastrarUsuario = () => {


  return (
    <CadastrarContainer>
        <h1>USUÁRIOS</h1>
        <MenuUsuarios/>
       <BodyContainer>
       <InputContainer> 
        <input type='text' placeholder='Nome'/>
        <input type='text' placeholder='CPF'/>
        <input type='text' placeholder='Telefone'/>
        <input type='text' placeholder='Data de Nascimento'/>
        <input type='text' placeholder='Cargo'/>
        <input type='text' placeholder='Senha Provisória'/>
        </InputContainer> 

        </BodyContainer>
        <Button>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarUsuario;