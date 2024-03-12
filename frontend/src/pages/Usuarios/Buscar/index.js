import {InputContainer, PageContainer} from  "../../../components/PagesStyles/buscar/index.jsx"
import MenuUsuarios from "../../../components/MenuCRUD/MenuUsuarios";
import Button from "../../../components/Button/Button";

const BuscarUsuario = () => {

  return (
    <PageContainer>
        <h1>USUÁRIOS</h1>
       <MenuUsuarios/>
        <InputContainer> 
        <input type='text' placeholder=' CPF'/> 

        </InputContainer> 
        <Button as="a" href="./ResultadoBuscar">Exibir</Button>

    </PageContainer>
  )
}

export default BuscarUsuario;