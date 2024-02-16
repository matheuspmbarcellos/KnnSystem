// import { Link } from "react-router-dom";
import { PageContainer, InputContainer} from "../../../components/PagesStyles/buscar";
import MenuFornecedores from "../../../components/MenuCRUD/MenuFornecedores";
import Button from "../../../components/Button/Button";
import { useContext, useState } from "react";
import { FornecedorContext } from "../../../context/FornecedorContext";
import { useNavigate } from "react-router-dom";

const BuscarFornecedor = () => {
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [numeroContrato, setNumeroContrato] = useState('');
  const { buscarParams, error, setError } = useContext(FornecedorContext)
  const navigate = useNavigate();

  const handleExibirResultado = (e) => {
      e.preventDefault();
      const input = {
        cnpj,
        razaoSocial,
        numeroContrato
      };
      
      buscarParams(input);
      
      if(error === null || (cnpj === '' && razaoSocial === '' && numeroContrato === '')) {
      navigate("/ResultadoFornecedor");
      }
  };

  return (
    <PageContainer>
        <h1>FORNECEDORES</h1>
        <MenuFornecedores/>
        <form onSubmit={handleExibirResultado}>
        <InputContainer> 
          <input type='text' placeholder='CNPJ' value={cnpj} onChange={(e) => setCnpj(e.target.value)} onFocus={() => setError("")} />
          <input type='text' placeholder='Razão Social' value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} onFocus={() => setError("")} />
          <input type='text' placeholder='Número do Contrato' value={numeroContrato} onChange={(e) => setNumeroContrato(e.target.value)} onFocus={() => setError("")} />          
          <Button type="submit">Exibir</Button>
          {error && <p>{error}</p>}
        </InputContainer>
        </form>
        
    </PageContainer>
  )
}

export default BuscarFornecedor;