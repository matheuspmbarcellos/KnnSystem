import { PageContainer, InputContainer} from "../../../components/PagesStyles/buscar";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import MenuFaturas from "../../../components/MenuCRUD/MenuFaturas";
import { useFatura } from "../../../context/FaturaContext";

const ConsultarFatura = () => {
  const [cnpjFornecedor, setcnpjFornecedor] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [numeroContrato, setNumeroContrato] = useState('');
  const [numeroFaturaconsulta, setnumeroFaturaconsulta] = useState('');
  const { buscarParams, error, setError } = useFatura()

  const handleExibirResultado = (e) => {
      e.preventDefault();
      const input = {
        cnpjFornecedor,
        razaoSocial,
        numeroContrato,
        numeroFaturaconsulta
      };
      buscarParams(input);
  };

  return (
    <PageContainer>
        <h1>FATURAS</h1>
        <MenuFaturas/>
        <form onSubmit={handleExibirResultado}>
        <InputContainer> 
          <input type='text' placeholder='CNPJ Fornecedor' value={cnpjFornecedor} onChange={(e) => setcnpjFornecedor(e.target.value)} onFocus={() => setError(null)} />
          <input type='text' placeholder='Razão Social' value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} onFocus={() => setError(null)} />
          <input type='text' placeholder='Número Contrato' value={numeroContrato} onChange={(e) => setNumeroContrato(e.target.value)} onFocus={() => setError(null)} />
          <input type='text' placeholder='Número Fatura' value={numeroFaturaconsulta} onChange={(e) => setnumeroFaturaconsulta(e.target.value)} onFocus={() => setError(null)} />        
          <Button type="submit">Exibir</Button>
          {error && <p>{error}</p>}
        </InputContainer>
        </form>
        
    </PageContainer>
  )
}

export default ConsultarFatura;