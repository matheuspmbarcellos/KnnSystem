// import { Link } from "react-router-dom";
import { ContratosContainer, InputContainer} from "./styles";
import MenuContratos from "../../../components/MenuCRUD/MenuContratos";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuscarContratos = () => {
  const [controle, setControle] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const navigate = useNavigate();

  const handleExibirResultado = (e) => {
      navigate("/ResultadoContrato");
      
  };

  return (
    <ContratosContainer>
        <h1>CONTRATOS</h1>
        <MenuContratos/>
        <form onSubmit={handleExibirResultado}>
        <InputContainer> 
          <input type='text' placeholder='Número de Controle do Contrato' value={controle} onChange={(e) => setControle(e.target.value)}/>
          <input type='text' placeholder='Razão Social do Fornecedor' value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)}/>
          <input type='text' placeholder='CNPJ do Fornecedor' value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>          
          {/* <Link to={"/ResultadoContrato"}> */}
            <Button type="submit">Exibir</Button>
          {/* </Link> */}
        </InputContainer>
        </form>
        
    </ContratosContainer>
  )
}

export default BuscarContratos;