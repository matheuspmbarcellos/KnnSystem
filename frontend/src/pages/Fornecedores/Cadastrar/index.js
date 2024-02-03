import { CadastrarContainer, InputContainer, BodyContainer, InputContainerRow } from "./styles";
import MenuFornecedores from "../../../components/MenuCRUD/MenuFornecedores";
import Button from "../../../components/Button/Button";
import { useCadastroFornecedor } from "../../../hooks/useCadastroFornecedor";
import { useState } from "react";

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
  const { mutate} = useCadastroFornecedor();

  const submit =  () => {
    const data = {
      "razaoSocial": razaoSocial,
        "cnpj": cnpj,
        "domicilioBancario": {
            "agencia": agencia,
            "contaCorrente": contaCorrente,
            "banco": banco,
            "pix": pix
        },
        "responsavel": {
            "nome": nome,
            "cpf": cpf,
            "telefone": telefone,
            "email": email
        },
        "enderecoCompleto": enderecoCompleto,
        "naturezaDoServico": naturezaDoServico,
        "emailCorporativo": emailCorporativo
      }
      mutate({data});
  };



  return (
    <CadastrarContainer>
        <h1>FORNECEDORES</h1>
        <MenuFornecedores/>
       <BodyContainer>
        <InputContainer> 
        <input type='text' placeholder='Razão Social' value={razaoSocial} onChange={e => setRazaoSocial(e.target.value)}/>
        <input type='text' placeholder='CNPJ' value={cnpj} onChange={e => seteCnpj(e.target.value)}/>
        <input type='text' placeholder='Natureza do Serviço' value={naturezaDoServico} onChange={e => setNaturezaDoServico(e.target.value)}/>
        <InputContainerRow>
          <input type='text' placeholder='Agencia' value={agencia} onChange={e => seteAgencia(e.target.value)}/>
          <input type='text' placeholder='C/C' value={contaCorrente} onChange={e => setContaCorrente(e.target.value)}/>
        </InputContainerRow>
          <input type='text' placeholder='Banco' value={banco} onChange={e => setBanco(e.target.value)}/>
          <input type='text' placeholder='PIX' value={pix} onChange={e => setPix(e.target.value)}/>
        </InputContainer> 
        <InputContainer> 
        <input type='text' placeholder='Nome do Responsável' value={nome} onChange={e => setNome(e.target.value)}/>
        <input type='text' placeholder='CPF do Responsável' value={cpf} onChange={e => setCpf(e.target.value)}/>
        <input type='text' placeholder='Telefone do Responsável' value={telefone} onChange={e => setTelefone(e.target.value)}/>
        <input type='email' placeholder='E-mail do Responsável' value={email} onChange={e => setEmail(e.target.value)}/>
        <input type='email' placeholder='E-mail corporativo' value={emailCorporativo} onChange={e => setEmailCorporativo(e.target.value)}/>
        <input type='text' placeholder='Endereço' value={enderecoCompleto} onChange={e => setEnderecoCompleto(e.target.value)}/>
        </InputContainer> 
        </BodyContainer>
        <Button onClick={submit}>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarFornecedor;