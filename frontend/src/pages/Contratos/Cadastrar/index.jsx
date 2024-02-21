import { CadastrarContainer, InputContainer, BodyContainer, InputContainerRow } from "../../../components/PagesStyles/cadastrar";
import MenuContratos from "../../../components/MenuCRUD/MenuContratos";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { api } from "../../../services/api";

const CadastrarContrato = () => {
  const [numeroControleFornecedor, setNumeroControleFornecedor] = useState("")  
  const [vigenciaInicial, setEvigenciaInicial] = useState("")  
  const [vigenciaFinal, setEvigenciaFinal] = useState("")  
  const [valorMensalAtual, setValorMensalAtual] = useState("")  
  const [valorMensalInicial, setValorMensalInicial] = useState("")  
  const [objetoContratual, setObjetoContratual] = useState("")  
  const [nome, setNome] = useState("")  
  const [cpf, setCpf] = useState("")  
  const [email, setEmail] = useState("")  
  const [percentualMulta, setPercentualMulta] = useState("")   
  const [emailSindico, setEmailSindico] = useState("")  

  const submit = async () => {
    try {
      const response = await api.post('/contrato/api/cadastra', {
        numeroControleFornecedor,
        vigenciaInicial,
        vigenciaFinal,
        valorMensalAtual,
        valorMensalInicial,
        objetoContratual,
        gestor: {
          nome,
          cpf,
          email,
        },
        percentualMulta,
        emailSindico,
      });
      console.log(response.data);
      alert(`Contrato cadastrado com sucesso! N° ${response.data.numeroContrato}`)
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
  }; 

  const handleLimparFormulario = () => {
    setNumeroControleFornecedor("")
    setEvigenciaInicial("")
    setEvigenciaFinal("")
    setValorMensalAtual("")
    setValorMensalInicial("")
    setObjetoContratual("")
    setNome("")
    setCpf("")
    setEmail("")
    setPercentualMulta("")
    setEmailSindico("")

  };



  return (
    <CadastrarContainer>
        <h1>CONTRATOS</h1>
        <MenuContratos/>
       <BodyContainer>
        <InputContainer> 
          <input type='text' placeholder='Código Fornecedor' value={numeroControleFornecedor} onChange={e => setNumeroControleFornecedor(e.target.value)} required/>
          <InputContainerRow>
            <input type='text' placeholder='vigenciaInicial' value={vigenciaInicial} onChange={e => setEvigenciaInicial(e.target.value)} required/>
            <input type='text' placeholder='vigenciaFinal' value={vigenciaFinal} onChange={e => setEvigenciaFinal(e.target.value)} required/>
          </InputContainerRow>
          <input type='text' placeholder='Valor Mensal Inicial' value={valorMensalInicial} onChange={e => setValorMensalInicial(e.target.value)} required/>
          <input type='text' placeholder='Valor Mensal Atual' value={valorMensalAtual} onChange={e => setValorMensalAtual(e.target.value)} required/>
          <input type='text' placeholder='Objeto Contratual' value={objetoContratual} onChange={e => setObjetoContratual(e.target.value)} required/>
        </InputContainer> 
        <InputContainer> 
          <input type='text' placeholder='Nome do Gestor' value={nome} onChange={e => setNome(e.target.value)} required/>
          <input type='text' placeholder='CPF do Gestor' value={cpf} onChange={e => setCpf(e.target.value)} required/>
          <input type='email' placeholder='E-mail do Gestor' value={email} onChange={e => setEmail(e.target.value)} required/>
          <input type='email' placeholder='E-mail Síndico' value={emailSindico} onChange={e => setEmailSindico(e.target.value)} required/>
          <input type='text' placeholder='Percentual Multa' value={percentualMulta} onChange={e => setPercentualMulta(e.target.value)} required/>
        </InputContainer> 
        </BodyContainer>
        <Button onClick={submit}>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarContrato;