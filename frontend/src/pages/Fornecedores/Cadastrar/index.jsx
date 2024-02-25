import { CadastrarContainer, InputContainer, BodyContainer, InputContainerRow } from "../../../components/PagesStyles/cadastrar";
import MenuFornecedores from "../../../components/MenuCRUD/MenuFornecedores";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { api } from "../../../services/api";

const CadastrarFornecedor = () => {
  const [razaoSocial, setRazaoSocial] = useState("")  
  const [cnpj, seteCnpj] = useState("")  
  const [agencia, seteAgencia] = useState("")  
  const [contaCorrente, setContaCorrente] = useState("")  
  const [banco, setBanco] = useState("")  
  const [pix, setPix] = useState("")  
  const [nome, setNome] = useState("")  
  const [cpf, setCpf] = useState("")  
  const [telefone, setTelefone] = useState("")  
  const [email, setEmail] = useState("")  
  const [enderecoCompleto, setEnderecoCompleto] = useState("")  
  const [naturezaDoServico, setNaturezaDoServico] = useState("")  
  const [emailCorporativo, setEmailCorporativo] = useState("")

  const submit = async () => {
    try {
      const response = await api.post('/fornecedor/api/cadastra', {
        razaoSocial,
        cnpj,
        domicilioBancario: {
          agencia,
          contaCorrente,
          banco,
          pix,
        },
        responsavel: {
          nome,
          cpf,
          telefone,
          email,
        },
        enderecoCompleto,
        naturezaDoServico,
        emailCorporativo,
      });
      console.log('Fornecedor cadastrado com sucesso:', response.data);
      alert('Fornecedor cadastrado com sucesso!')
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
  }; 

  const handleLimparFormulario = () => {
    setRazaoSocial("")
    seteCnpj("")
    seteAgencia("")
    setContaCorrente("")
    setBanco("")
    setPix("")
    setNome("")
    setCpf("")
    setTelefone("")
    setEmail("")
    setEnderecoCompleto("")
    setNaturezaDoServico("") 
    setEmailCorporativo("")

  };



  return (
    <CadastrarContainer>
        <h1>FORNECEDORES</h1>
        <MenuFornecedores/>
       <BodyContainer>
        <InputContainer> 
        <input type='text' placeholder='Razão Social' value={razaoSocial} onChange={e => setRazaoSocial(e.target.value)} required />
        <input type='text' placeholder='CNPJ' value={cnpj} onChange={e => seteCnpj(e.target.value)} required />
        <input type='text' placeholder='Natureza do Serviço' value={naturezaDoServico} onChange={e => setNaturezaDoServico(e.target.value)} required />
        <InputContainerRow>
          <input type='text' placeholder='Agencia' value={agencia} onChange={e => seteAgencia(e.target.value)} required />
          <input type='text' placeholder='C/C' value={contaCorrente} onChange={e => setContaCorrente(e.target.value)} required />
        </InputContainerRow>
          <input type='text' placeholder='Banco' value={banco} onChange={e => setBanco(e.target.value)} required />
          <input type='text' placeholder='PIX' value={pix} onChange={e => setPix(e.target.value)} required />
        </InputContainer> 
        <InputContainer> 
        <input type='text' placeholder='Nome do Responsável' value={nome} onChange={e => setNome(e.target.value)} required />
        <input type='text' placeholder='CPF do Responsável' value={cpf} onChange={e => setCpf(e.target.value)} required />
        <input type='text' placeholder='Telefone do Responsável' value={telefone} onChange={e => setTelefone(e.target.value)} required />
        <input type='email' placeholder='E-mail do Responsável' value={email} onChange={e => setEmail(e.target.value)}/>
        <input type='email' placeholder='E-mail corporativo' value={emailCorporativo} onChange={e => setEmailCorporativo(e.target.value)} required />
        <input type='text' placeholder='Endereço' value={enderecoCompleto} onChange={e => setEnderecoCompleto(e.target.value)} required />
        </InputContainer> 
        </BodyContainer>
        <Button onClick={submit}>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarFornecedor;