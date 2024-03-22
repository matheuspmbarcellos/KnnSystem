import { CadastrarContainer, InputContainer,
   BodyContainer } from "../../../components/PagesStyles/cadastrar";
import MenuUsuarios from "../../../components/MenuCRUD/MenuUsuarios";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { api } from "../../../services/api";

const CadastrarUsuario = () => {
  const [nome, setNome] =useState("")
  const [cpf, setCpf] =useState("")
  const [email, setEmail] =useState("")
  const [dataNascimento, setDataNascimento] =useState("")
  const [cargo, setCargo] =useState("")
  const [senha, setSenha] =useState("")
  const [tipoDataNascimento, setTipoDataNascimento] = useState('text');

  const handleDataNascimentoClick = () => {
    setTipoDataNascimento('date');
  };

  const handleDataNascimentoBlur = () => {
    if (!dataNascimento) {
      setTipoDataNascimento('text');
    }
  };
  

  const submit = async () => {
    try {
      const response = await api.post('/usuario/api/cadastra', {
        "cpf": cpf,
        "nome": nome,
        "email": email,
        "dataNascimento": dataNascimento,
        "cargo": cargo,
        "senha": senha
      });
      alert(`Usuário ${response.data.nome} cadastrado com sucesso!`)
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
    setNome("")
    setCpf("")
    setEmail("")
    setDataNascimento("")
    setCargo("")
    setSenha("")
  };



  return (
    <CadastrarContainer>
        <h1>USUÁRIOS</h1>
        <MenuUsuarios/>
       <BodyContainer>
        <InputContainer>
          <input type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} required />
          <input type='text' placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)} required />
          <input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} required />
          <input
            type={tipoDataNascimento}
            placeholder='Data de Nascimento'
            value={dataNascimento}
            onChange={e => setDataNascimento(e.target.value)}
            onFocus={handleDataNascimentoClick}
            onBlur={handleDataNascimentoBlur}
            required
          />
          <select value={cargo} onChange={e => setCargo(e.target.value)} required>
            <option value="" disabled hidden>Selecione o Cargo</option>
            <option value="ADMINISTRADOR">Administrador</option>
            <option value="SÍNDICO">Sindico</option>
            <option value="FUNCIONARIO">Funcionario</option>
          </select>
          <input type='password' placeholder='Senha' value={senha}  onChange={e => setSenha(e.target.value)} pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Senha deve possuir no mínimo 8 posições, com letras e números" required />
        </InputContainer> 
        </BodyContainer>
        <Button onClick={submit}>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default CadastrarUsuario;