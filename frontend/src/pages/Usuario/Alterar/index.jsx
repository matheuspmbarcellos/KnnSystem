import { useNavigate } from "react-router-dom";
import { InputContainer, AlterarContainer, PageContainer,
   CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import Button from "../../../components/Button/Button";
import { useUsuario } from "../../../context/UsuarioContext";
import { useState } from "react";
import moment from "moment";


const AlterarUsuario = () => {
  const { usuarioDetail, atualizarUsuario } = useUsuario();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({}); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    const usuarioAtualizado = {
      nome: formData.nome || usuarioDetail.nome,
      cpf: formData.cpf || usuarioDetail.cpf,
      telefone: formData.tel || usuarioDetail.telefone,
      email: formData.email || usuarioDetail.email,
      dataNascimento: formData.dataNascimento || usuarioDetail.dataNascimento,
      cargo: formData.cargo || usuarioDetail.cargo,
      status: usuarioDetail.status
    }
    atualizarUsuario(usuarioDetail.cpf, usuarioAtualizado)
  };

  return (
    <>
      {usuarioDetail ? (
        <PageContainer>
          <p className="title">{usuarioDetail.nome}<span className={`${usuarioDetail.status}`}> {usuarioDetail.status}</span></p>
          
          <AlterarContainer>
            <CorpoContainer>
              <CorpoContent>
                <Titulo>Nome</Titulo>
                {editing ? (
                  <InputContainer>                  
                     <input
                       type="text"
                       name="nome"
                       value={formData.nome || usuarioDetail.nome}
                       onChange={handleInputChange}
                     />
                   </InputContainer>
                 ) : (
                <Dado>{usuarioDetail.nome}</Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>CPF</Titulo>
                {editing ? (
                  <InputContainer>                  
                     <input
                       type="text"
                       name="cpf"
                       value={formData.cpf || usuarioDetail.cpf}
                       onChange={handleInputChange}
                     />
                   </InputContainer>
                 ) : (
                <Dado>{usuarioDetail.cpf.replace(
                      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                      '$1.$2.$3-$4'
                )}
                </Dado>
                )}
              </CorpoContent>    
              <CorpoContent>
                <Titulo>Telefone</Titulo>
                {editing ? (
                  <InputContainer>                  
                     <input
                       type="text"
                       name="telefone"
                       value={formData.telefone || usuarioDetail.telefone}
                       onChange={handleInputChange}
                     />
                   </InputContainer>
                 ) : (
                <Dado>{usuarioDetail.telefone}</Dado>
                )}
              </CorpoContent>    
            </CorpoContainer>

            <CorpoContainer>
            <CorpoContent>
                <Titulo>Cargo</Titulo>
                {editing ? (
                  <Dado>
                    <select
                      value={formData.cargo}
                      onChange={e => handleInputChange({ target: { name: 'cargo', value: e.target.value } })}
                      required
                      >
                      <option value="" disabled hidden>Selecione o Cargo</option>
                      <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                      <option value="SINDICO">SINDICO</option>
                      <option value="FUNCIONARIO">FUNCIONARIO</option>
                    </select>
                  </Dado>
                 ) : (
                <Dado>{usuarioDetail.cargo}</Dado>
                )}
              </CorpoContent>    
              <CorpoContent>
                <Titulo>Data de Nascimento</Titulo>
                {editing ? (
                  <InputContainer>                  
                     <input
                       type="date"
                       name="dataNascimento"
                       value={formData.dataNascimento || usuarioDetail.dataNascimento}
                       onChange={handleInputChange}
                     />
                   </InputContainer>
                 ) : (
                <Dado>{moment(usuarioDetail.dataNascimento).format('DD-MM-YYYY').replace(/-/g,"/")}</Dado>
                )}
              </CorpoContent>       
              <CorpoContent>
                <Titulo>E-mail</Titulo>
                {editing ? (
                  <InputContainer>                  
                     <input
                       type="text"
                       name="email"
                       value={formData.email || usuarioDetail.email}
                       onChange={handleInputChange}
                     />
                   </InputContainer>
                 ) : (
                <Dado>{usuarioDetail.email}</Dado>
                )}
              </CorpoContent>    
              </CorpoContainer> 

            <CorpoContainer>
              <center className="bottom">
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                <Button onClick={() => setEditing(!editing)}>
                  {editing ? 'Cancelar' : 'Editar'}
                </Button>
                {editing && (
                  <Button onClick={handleSaveChanges}>Salvar</Button>
                )}
              </center>
            </CorpoContainer>
          </AlterarContainer>
        </PageContainer>
      ) : (
        <p>Nenhum Fornecedor selecionado</p>
      )}
    </>
  );
};


export default AlterarUsuario;