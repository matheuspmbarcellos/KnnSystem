// import { Link } from "react-router-dom";
import { PageContainer, InputContainer} from "../../../components/PagesStyles/buscar";
import MenuContratos from "../../../components/MenuCRUD/MenuContratos";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { useContrato } from "../../../context/ContratoContext";

const BuscarContrato = () => {
  const [cnpjFornecedor, setCnpjFornecedor] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [numeroControle, setNumeroControle] = useState('');
  const { buscarParams, error, setError } = useContrato();

  const handleExibirResultado = (e) => {
      e.preventDefault();
      const input = {
        cnpjFornecedor,
        razaoSocial,
        numeroControle
      };    
      buscarParams(input);
  };

  return (
    <PageContainer>
        <h1>CONTRATOS</h1>
        <MenuContratos/>
        <form onSubmit={handleExibirResultado}>
        <InputContainer> 
          <input type='text' placeholder='CNPJ' value={cnpjFornecedor} onChange={(e) => setCnpjFornecedor(e.target.value)} onFocus={() => setError(null)} />
          <input type='text' placeholder='Razão Social' value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} onFocus={() => setError(null)} />
          <input type='text' placeholder='Número do Contrato' value={numeroControle} onChange={(e) => setNumeroControle(e.target.value)} onFocus={() => setError(null)} />          
          <Button type="submit">Exibir</Button>
          {error && <p>{error}</p>}
        </InputContainer>
        </form>
        
    </PageContainer>
  )
}

export default BuscarContrato;