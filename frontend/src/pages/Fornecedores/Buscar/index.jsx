// import { Link } from "react-router-dom";
import { PageContainer, InputContainer} from "../../../components/PagesStyles/buscar";
import MenuFornecedores from "../../../components/MenuCRUD/MenuFornecedores";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { useFornecedor } from "../../../context/FornecedorContext";

const BuscarFornecedor = () => {
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [numeroControle, setNumeroControle] = useState('');
  const { buscarParams, error, setError } = useFornecedor();

  const handleExibirResultado = (e) => {
      e.preventDefault();
      const input = {
        cnpj,
        razaoSocial,
        numeroControle
      };    
      buscarParams(input);
  };

  return (
    <PageContainer>
        <h1>FORNECEDORES</h1>
        <MenuFornecedores/>
        <form onSubmit={handleExibirResultado}>
        <InputContainer> 
          <input type='text' placeholder='CNPJ' value={cnpj} onChange={(e) => setCnpj(e.target.value)} onFocus={() => setError(null)} />
          <input type='text' placeholder='Razão Social' value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} onFocus={() => setError(null)} />
          <input type='text' placeholder='Número de Controle' value={numeroControle} onChange={(e) => setNumeroControle(e.target.value)} onFocus={() => setError(null)} />          
          <Button type="submit">Exibir</Button>
          {error && <p>{error}</p>}
        </InputContainer>
        </form>
        
    </PageContainer>
  )
}

export default BuscarFornecedor;