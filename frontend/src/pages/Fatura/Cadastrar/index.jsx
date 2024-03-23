import { CadastrarContainer, InputContainer,
   BodyContainer } from "../../../components/PagesStyles/cadastrar";
import MenuFaturas from "../../../components/MenuCRUD/MenuFaturas";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { api } from "../../../services/api";

const CadastrarFatura = () => {
  const [numeroContrato, setNumeroContrato] = useState("")  
  const [numeroFatura, setnumeroFatura] = useState("")  
  const [percentualJuros, setpercentualJuros] = useState("")  
  const [razaoSocial, setrazaoSocial] = useState("")  
  const [dataCadastro, setDataCadastro] = useState("")  
  const [dataPagamento, setDataPagamento] = useState("")  
  const [valor, setvalor] = useState("")  
  const [agencia, setagencia] = useState("") 
  const [contaCorrente, setcontaCorrente] = useState("")  
  const [banco, setbanco] = useState("")  
  const [pix, setpix] = useState("")  
  const [cnpjFornecedor, setcnpjFornecedor] = useState("")
  const [tipoDataCadastro, setTipoDataCadastro] = useState('text');
  const [tipoDataPagamento, setTipoDataPagamento] = useState('text');

  const handleDataCadastroClick = () => {
    setTipoDataCadastro('date');
  };

  const handleDataCadastroBlur = () => {
    if (!dataCadastro) {
      setTipoDataCadastro('text');
    }
  };
  const handleDataPagamentoClick = () => {
    setTipoDataPagamento('date');
  };

  const handleDataPagamentoBlur = () => {
    if (!dataPagamento) {
      setTipoDataPagamento('text');
    }
  };

  const submit = async () => {
    try {
      const response = await api.post('/fatura/api/cadastra', {
        numeroContrato,
        numeroFatura,
        percentualJuros,
        cnpjFornecedor,
        razaoSocial,
        dataCadastro,
        dataPagamento,
        valor,
        domicilioBancario: {
            agencia,
            contaCorrente,
            banco,
            pix
        }    
      });
      console.log('Fatura cadastrada com sucesso:', response.data);
      alert('Fatura cadastrada com sucesso!')
      handleLimparFormulario();
    } catch (error) {
        if (error.response) {
          alert(error.response.data.mensagem);
        } else if (error.request) {
            alert("Erro ao fazer a requisição para o servidor.");
        } else {
            alert("Ocorreu um erro ao processar sua solicitação.");
        }
    }
  }
 

  const handleLimparFormulario = () => {
    setNumeroContrato("")
    setnumeroFatura("")
    setpercentualJuros("")
    setrazaoSocial("")
    setDataCadastro("")
    setDataPagamento("")
    setvalor("")
    setagencia("")
    setcontaCorrente("")
    setbanco("")
    setpix("")
    setcnpjFornecedor("")
  };



  return (
    <CadastrarContainer>
        <h1>FATURAS</h1>
        <MenuFaturas />
       <BodyContainer>
        <InputContainer>
          <input type='text' placeholder='Número do Contrato' value={numeroContrato} onChange={e => setNumeroContrato(e.target.value)} required />
          <input type='text' placeholder='Número da Fatura' value={numeroFatura} onChange={e => setnumeroFatura(e.target.value)} required />
          <input
            type={tipoDataCadastro}
            placeholder='Data Cadastro'
            value={dataCadastro}
            onChange={e => setDataCadastro(e.target.value)}
            onFocus={handleDataCadastroClick}
            onBlur={handleDataCadastroBlur}
            required
          />
          <input
            type={tipoDataPagamento}
            placeholder='Data Pagamento'
            value={dataPagamento}
            onChange={e => setDataPagamento(e.target.value)}
            onFocus={handleDataPagamentoClick}
            onBlur={handleDataPagamentoBlur}
            required
          />
          <input type='text' placeholder='Valor' value={valor} onChange={e => setvalor(e.target.value)} required />
          <input type='text' placeholder='Percentual Juros' value={percentualJuros} onChange={e => setpercentualJuros(e.target.value)} required />
        </InputContainer> 
        <InputContainer> 
          <input type='email' placeholder='CNPJ Fornecedor' value={cnpjFornecedor} onChange={e => setcnpjFornecedor(e.target.value)} required />
          <input type='text' placeholder='Razão Social' value={razaoSocial} onChange={e => setrazaoSocial(e.target.value)} required />
          <input type='email' placeholder='Agência' value={agencia} onChange={e => setagencia(e.target.value)} required />
          <input type='text' placeholder='Conta Corrente' value={contaCorrente} onChange={e => setcontaCorrente(e.target.value)} required />
          <input type='text' placeholder='Banco' value={banco} onChange={e => setbanco(e.target.value)} required />
          <input type='text' placeholder='PIX' value={pix} onChange={e => setpix(e.target.value)} required />
        </InputContainer> 
        </BodyContainer>
        <Button onClick={submit}>INCLUIR</Button>
    </CadastrarContainer>
  )
}

export default CadastrarFatura;