// import { Link } from "react-router-dom";
import { FornecedoresContainer, InputContainer} from "./styles";
import MenuFornecedores from "../../../components/MenuCRUD/MenuFornecedores";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { api } from "../../../services/api";

const BuscarFornecedor = () => {
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [numeroContrato, setNumeroContrato] = useState('');

  const handleExibirResultado = async (e) => {
    e.preventDefault();
    try {
      const params = {};
      if (cnpj) params.cnpj = cnpj;
      if (razaoSocial) params.razaoSocial = razaoSocial;
      if (numeroContrato) params.numeroContrato = numeroContrato;

      const response = await api.get('/fornecedor/api/consulta', { params });
      
      console.log(response.data);
    } catch {
      console.log('Erro ao buscar fornecedor:');
    }    
  };

  return (
    <FornecedoresContainer>
        <h1>FORNECEDORES</h1>
        <MenuFornecedores/>
        <form onSubmit={handleExibirResultado}>
        <InputContainer> 
          <input type='text' placeholder='CNPJ' value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>
          <input type='text' placeholder='Razão Social' value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)}/>
          <input type='text' placeholder='Número do Contrato' value={numeroContrato} onChange={(e) => setNumeroContrato(e.target.value)}/>          
          {/* <Link to={"/ResultadoFornecedor"}> */}
            <Button type="submit">Exibir</Button>
          {/* </Link> */}
        </InputContainer>
        </form>
        
    </FornecedoresContainer>
  )
}

export default BuscarFornecedor;