import { CadastrarContainer, InputContainer,
   BodyContainer } from "../../../components/PagesStyles/cadastrar";
import MenuPagamentos from "../../../components/MenuCRUD/MenuPagamentos";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { api } from "../../../services/api";

const CadastrarPagamento = () => {
  const [numeroContrato, setNumeroContrato] = useState("")  
  const [numeroFatura, setnumeroFatura] = useState("")  
  const [percentualJuros, setpercentualJuros] = useState("")  
  const [razaoSocial, setrazaoSocial] = useState("")  
  const [dataCadastro, setdataCadastro] = useState("")  
  const [dataPagamento, setdataPagamento] = useState("")  
  const [valor, setvalor] = useState("")  
  const [agencia, setagencia] = useState("") 
  const [contaCorrente, setcontaCorrente] = useState("")  
  const [banco, setbanco] = useState("")  
  const [pix, setpix] = useState("")  
  const [cnpjFornecedor, setcnpjFornecedor] = useState("")

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
      console.log('Pagamento cadastrado com sucesso:', response.data);
      alert('Fornecedor cadastrado com sucesso!')
      handleLimparFormulario();
    } catch (error) {
        if (error.response) {
          // Erro de resposta do servidor
          alert(error.response.data.mensagem);
        } else if (error.request) {
            // Erro de requisição
            alert("Erro ao fazer a requisição para o servidor.");
        } else {
            // Outro tipo de erro
            alert("Ocorreu um erro ao processar sua solicitação.");
        }
    }
  }
 

  const handleLimparFormulario = () => {
    setNumeroContrato("")
    setnumeroFatura("")
    setpercentualJuros("")
    setrazaoSocial("")
    setdataCadastro("")
    setdataPagamento("")
    setvalor("")
    setagencia("")
    setcontaCorrente("")
    setbanco("")
    setpix("")
    setcnpjFornecedor("")
  };



  return (
    <CadastrarContainer>
        <h1>PAGAMENTOS</h1>
        <MenuPagamentos />
       <BodyContainer>
        <InputContainer>
          <input type='text' placeholder='Número do Contrato' value={numeroContrato} onChange={e => setNumeroContrato(e.target.value)}/>
          <input type='text' placeholder='Número da Fatura' value={numeroFatura} onChange={e => setnumeroFatura(e.target.value)}/>
          <input type='text' placeholder='Data Cadastro' value={dataCadastro} onChange={e => setdataCadastro(e.target.value)}/>
          <input type='text' placeholder='Data Pagamento' value={dataPagamento} onChange={e => setdataPagamento(e.target.value)}/>
          <input type='text' placeholder='Valor' value={valor} onChange={e => setvalor(e.target.value)}/>
          <input type='text' placeholder='Percentual Juros' value={percentualJuros} onChange={e => setpercentualJuros(e.target.value)}/>
        </InputContainer> 
        <InputContainer> 
          <input type='email' placeholder='CNPJ Fornecedor' value={cnpjFornecedor} onChange={e => setcnpjFornecedor(e.target.value)}/>
          <input type='text' placeholder='Razão Social' value={razaoSocial} onChange={e => setrazaoSocial(e.target.value)}/>
          <input type='email' placeholder='Agência' value={agencia} onChange={e => setagencia(e.target.value)}/>
          <input type='text' placeholder='Conta Corrente' value={contaCorrente} onChange={e => setcontaCorrente(e.target.value)}/>
          <input type='text' placeholder='Banco' value={banco} onChange={e => setbanco(e.target.value)}/>
          <input type='text' placeholder='PIX' value={pix} onChange={e => setpix(e.target.value)}/>
        </InputContainer> 
        </BodyContainer>
        <Button onClick={submit}>INCLUIR</Button>
    </CadastrarContainer>
  )
}

export default CadastrarPagamento;