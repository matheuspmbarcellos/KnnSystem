import { CadastrarContainer, InputContainer,
   BodyContainer } from "../../../components/PagesStyles/cadastrar";
import MenuApartamentos from "../../../components/MenuCRUD/MenuApartamentos";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { api } from "../../../services/api";

const CadastrarApartamento = () => {
  const [metragemDoImovel, setMetragemDoImovel] = useState("")  
  const [numeroDoApartamento, setNumeroDoApartamento] = useState("")  
  const [blocoDoApartamento, setBlocoDoApartamento] = useState("")  
  const [registroImovel, setRegistroImovel] = useState("")  
  const [nomeProprietario, setNomeProprietario] = useState("")  
  const [cpfProprietario, setCpfProprietario] = useState("")  
  const [telefoneProprietario, setTelefoneProprietario] = useState("")  
  const [emailProprietario, setEmailProprietario] = useState("") 
  const [nomeMorador, setNomeMorador] = useState("")  
  const [cpfMorador, setCpfMorador] = useState("")  
  const [telefoneMorador, setTelefoneMorador] = useState("")  
  const [emailMorador, setEmailMorador] = useState("")  

  const submit = async () => {
    try {
      const response = await api.post('/apartamento/api/cadastra', {
        metragemDoImovel,
        morador: {
          numeroDoApartamento,
          blocoDoApartamento,
          nome: nomeMorador,
          cpf: cpfMorador,
          telefone: telefoneMorador,
          email: emailMorador
        },
        proprietario: {
          registroImovel,
          nome: nomeProprietario,
          cpf: cpfProprietario,
          telefone: telefoneProprietario,
          email: emailProprietario
        }
      });
      console.log('Fornecedor cadastrado com sucesso:', response.data);
      alert('Fornecedor cadastrado com sucesso!')
      handleLimparFormulario();
    } catch (error) {
      console.error('Erro ao cadastrar fornecedor:', error);
    }
  }; 

  const handleLimparFormulario = () => {
    setMetragemDoImovel("")
    setNumeroDoApartamento("")
    setBlocoDoApartamento("")
    setRegistroImovel("")
    setNomeProprietario("")
    setCpfProprietario("")
    setTelefoneProprietario("")
    setEmailProprietario("")
    setNomeMorador("")
    setCpfMorador("")
    setTelefoneMorador("")
    setEmailMorador("")
  };



  return (
    <CadastrarContainer>
        <h1>APARTAMENTOS</h1>
        <MenuApartamentos/>
       <BodyContainer>
        <InputContainer>
          <input type='text' placeholder='Unidade' value={numeroDoApartamento} onChange={e => setNumeroDoApartamento(e.target.value)}/>
          <input type='text' placeholder='RGI' value={registroImovel} onChange={e => setRegistroImovel(e.target.value)}/>
          <input type='text' placeholder='Nome Proprietário' value={nomeProprietario} onChange={e => setNomeProprietario(e.target.value)}/>
          <input type='text' placeholder='CPF Proprietário' value={cpfProprietario} onChange={e => setCpfProprietario(e.target.value)}/>
          <input type='text' placeholder='Telefone Proprietário' value={telefoneProprietario} onChange={e => setTelefoneProprietario(e.target.value)}/>
          <input type='email' placeholder='E-mail Proprietário' value={emailProprietario} onChange={e => setEmailProprietario(e.target.value)}/>
        </InputContainer> 
        <InputContainer> 
          <input type='text' placeholder='Bloco' value={blocoDoApartamento} onChange={e => setBlocoDoApartamento(e.target.value)}/>
          <input type='text' placeholder='Metragem (m²)' value={metragemDoImovel} onChange={e => setMetragemDoImovel(e.target.value)}/>
          <input type='text' placeholder='Nome Morador' value={nomeMorador} onChange={e => setNomeMorador(e.target.value)}/>
          <input type='text' placeholder='CPF Morador' value={cpfMorador} onChange={e => setCpfMorador(e.target.value)}/>
          <input type='text' placeholder='Telefone Morador' value={telefoneMorador} onChange={e => setTelefoneMorador(e.target.value)}/>
          <input type='email' placeholder='E-mail Morador' value={emailMorador} onChange={e => setEmailMorador(e.target.value)}/>
        </InputContainer> 
        </BodyContainer>
        <Button onClick={submit}>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarApartamento;