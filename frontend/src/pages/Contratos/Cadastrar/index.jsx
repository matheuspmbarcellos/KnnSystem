import { CadastrarContainer, InputContainer, BodyContainer, InputContainerRow } from "../../../components/PagesStyles/cadastrar";
import MenuContratos from "../../../components/MenuCRUD/MenuContratos";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { api } from "../../../services/api";

const CadastrarContrato = () => {
  const [numeroControleFornecedor, setNumeroControleFornecedor] = useState("")  
  const [vigenciaInicial, setVigenciaInicial] = useState("")  
  const [vigenciaFinal, setVigenciaFinal] = useState("")  
  const [valorMensalAtual, setValorMensalAtual] = useState("")  
  const [valorMensalInicial, setValorMensalInicial] = useState("")  
  const [objetoContratual, setObjetoContratual] = useState("")  
  const [nome, setNome] = useState("")  
  const [cpf, setCpf] = useState("")  
  const [email, setEmail] = useState("")  
  const [percentualMulta, setPercentualMulta] = useState("")   
  const [emailSindico, setEmailSindico] = useState("")  
  const [tipoVigenciaInicial, setTipoVigenciaInicial] = useState('text');
  const [tipoVigenciaFinal, setTipoVigenciaFinal] = useState('text');

  const handleVigenciaInicialClick = () => {
    setTipoVigenciaInicial('date');
  };

  const handleVigenciaInicialBlur = () => {
    if (!vigenciaInicial) {
      setTipoVigenciaInicial('text');
    }
  };
  const handleVigenciaFinalClick = () => {
    setTipoVigenciaFinal('date');
  };

  const handleVigenciaFinalBlur = () => {
    if (!vigenciaFinal) {
      setTipoVigenciaFinal('text');
    }
  };

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
      alert(`Contrato cadastrado com sucesso! N° ${response.data.numeroContrato}`)
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
    setNumeroControleFornecedor("")
    setVigenciaInicial("")
    setVigenciaFinal("")
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
          <input
            type={tipoVigenciaInicial}
            placeholder='Vigência Inicial'
            value={vigenciaInicial}
            onChange={e => setVigenciaInicial(e.target.value)}
            onFocus={handleVigenciaInicialClick}
            onBlur={handleVigenciaInicialBlur}
            required
          />
          <input
            type={tipoVigenciaFinal}
            placeholder='Vigência Final'
            value={vigenciaFinal}
            onChange={e => setVigenciaFinal(e.target.value)}
            onFocus={handleVigenciaFinalClick}
            onBlur={handleVigenciaFinalBlur}
            required
          />
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