import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputContainer, AlterarContainer, PageContainer, SubtituloContainer,
   CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import { ApartamentoContext } from "../../../context/ApartamentoContext";
import Button from "../../../components/Button/Button";


const AlterarApartamento = () => {
  const { apartamentoDetail, atualizarApartamento } = useContext(ApartamentoContext);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({}); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    const apartamentoAtualizado = {
      metragemDoImovel: apartamentoDetail.metragemDoImovel,
        morador: {
          numeroDoApartamento: apartamentoDetail.morador.numeroDoApartamento,
          blocoDoApartamento: apartamentoDetail.morador.blocoDoApartamento,
          nome: formData.nomeMorador || apartamentoDetail.morador.nome,
          cpf: formData.cpfMorador || apartamentoDetail.morador.cpf,
          telefone: formData.telMorador || apartamentoDetail.morador.telefone,
          email: formData.emailMorador || apartamentoDetail.morador.email
        },
        proprietario: {
          registroImovel: apartamentoDetail.proprietario.registroImovel,
          nome: formData.nomeProprietario || apartamentoDetail.proprietario.nome,
          cpf: formData.cpfProprietario || apartamentoDetail.proprietario.cpf,
          telefone: formData.telProprietario || apartamentoDetail.proprietario.telefone,
          email: formData.emailProprietario || apartamentoDetail.proprietario.email
        }
    }
    atualizarApartamento(apartamentoDetail.id, apartamentoAtualizado)
  };

  return (
    <>
      {apartamentoDetail ? (
        <PageContainer>
        <p className="title">{`Apartamento ${apartamentoDetail.morador.numeroDoApartamento} `}</p>
          <SubtituloContainer>
            <ul>
                <li><p>{`Bloco: ${apartamentoDetail.morador.blocoDoApartamento}`}</p></li>           
                <li><p>{`${apartamentoDetail.metragemDoImovel} m²`}</p></li>
                <li><p>RGI: {`${apartamentoDetail.proprietario.registroImovel}`}</p></li>
            </ul> 
        </SubtituloContainer>
          <AlterarContainer>
            <CorpoContainer>
              <CorpoContent>
                <Titulo>Nome Proprietário</Titulo>
                {editing ? (
                  <InputContainer>                  
                    <input
                      type="text"
                      name="nomeProprietario"
                      value={formData.nomeProprietario || apartamentoDetail.proprietario.nome}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{apartamentoDetail.proprietario.nome}</Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>CPF Proprietário</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="cpfProprietario"
                      value={formData.cpfProprietario || apartamentoDetail.proprietario.cpf}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{apartamentoDetail.proprietario.cpf.replace(
                    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                    '$1.$2.$3-$4'
                  )}</Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>telefone Proprietário</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="telProprietario"
                      value={formData.telProprietario || apartamentoDetail.proprietario.telefone}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{apartamentoDetail.proprietario.telefone}</Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>E-mail Proprietário</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="emailProprietario"
                      value={formData.emailProprietario || apartamentoDetail.proprietario.email}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{apartamentoDetail.proprietario.email}</Dado>
                )}
              </CorpoContent>              
            </CorpoContainer>

            <CorpoContainer>
              <CorpoContent>
                <Titulo>Nome Morador</Titulo>
                {editing ? (
                  <InputContainer>                  
                    <input
                      type="text"
                      name="nomeMorador"
                      value={formData.nomeMorador || apartamentoDetail.morador.nome}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{apartamentoDetail.morador.nome}</Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>CPF Morador</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="cpfMorador"
                      value={formData.cpfMorador || apartamentoDetail.morador.cpf}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{apartamentoDetail.morador.cpf.replace(
                    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                    '$1.$2.$3-$4'
                  )}
                  </Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>telefone Morador</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="telMorador"
                      value={formData.telMorador || apartamentoDetail.morador.telefone}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{apartamentoDetail.morador.telefone}</Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>E-mail Morador</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="emailMorador"
                      value={formData.emailMorador || apartamentoDetail.morador.email}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{apartamentoDetail.morador.email}</Dado>
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


export default AlterarApartamento;