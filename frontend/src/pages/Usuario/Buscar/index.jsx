import { PageContainer, InputContainer} from "../../../components/PagesStyles/buscar";
import MenuUsuarios from "../../../components/MenuCRUD/MenuUsuarios";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { useUsuario } from "../../../context/UsuarioContext";

const BuscarUsuario = () => {
  const [cpf, setCpf] = useState('');
  const { buscarParams, error, setError } = useUsuario()

  const handleExibirResultado = (e) => {
      e.preventDefault();
      const input = cpf;
      buscarParams(input);
  };

  return (
    <PageContainer>
        <h1>USUÁRIOS</h1>
        <MenuUsuarios/>
        <form onSubmit={handleExibirResultado}>
        <InputContainer> 
          <input type='text' placeholder='CPF' value={cpf} onChange={(e) => setCpf(e.target.value)} onFocus={() => setError(null)} required/>        
          <Button type="submit">Exibir</Button>
          {error && <p>{error}</p>}
        </InputContainer>
        </form>
        
    </PageContainer>
  )
}

export default BuscarUsuario;