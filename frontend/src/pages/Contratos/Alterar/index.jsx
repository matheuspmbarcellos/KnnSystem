import { AlterarContainer, PageContainer,
   CorpoContainer, Titulo, Dado, CorpoContent, InputContainer } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { useContrato } from "../../../context/ContratoContext";
import moment from "moment";
import { useState } from "react";


const AlterarContrato = () => {
  const { contratoDetail, atualizarContrato } = useContrato();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({}); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    const contratoAtualizado = {
      numeroControleFornecedor: contratoDetail.numeroControleFornecedor,
      vigenciaInicial: formData.vigenciaInicial || contratoDetail.vigenciaInicial,
      vigenciaFinal: formData.vigenciaFinal || contratoDetail.vigenciaFinal,
      valorMensalAtual: formData.valorMensalAtual || contratoDetail.valorMensalAtual,
      valorMensalInicial: contratoDetail.valorMensalInicial,
      objetoContratual: formData.objetoContratual || contratoDetail.objetoContratual,
      gestor: {
          cpf: contratoDetail.gestor.cpf,
          nome: contratoDetail.gestor.nome,
          email: contratoDetail.gestor.email
      },
      emailSindico: contratoDetail.emailSindico,
      percentualMulta: contratoDetail.percentualMulta
    }
    atualizarContrato(contratoDetail.id, contratoAtualizado)
  };

  return (
    <>
    {contratoDetail ? (
        <PageContainer>
          <p className="title">{`Contrato [${contratoDetail.numeroContrato}]`}<span className={`${contratoDetail.status}`}> {contratoDetail.status}</span></p>
          <AlterarContainer>
            <CorpoContainer>
              <CorpoContent>
                <Titulo>Vigência</Titulo>
                {editing ? (
                  <InputContainer>                  
                    <input
                      type="date"
                      name="vigenciaInicial"
                      value={formData.vigenciaInicial || contratoDetail.vigenciaInicial}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      name="vigenciaFinal"
                      value={formData.vigenciaFinal || contratoDetail.vigenciaFinal}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <>
                    <Dado><em>Início: </em> {moment(contratoDetail.vigenciaInicial).format('DD-MM-YYYY').replace(/-/g,"/")}</Dado>
                    <Dado><em>Término: </em> {moment(contratoDetail.vigenciaFinal).format('DD-MM-YYYY').replace(/-/g,"/")}</Dado>
                  </>
                )}
                </CorpoContent>
              <CorpoContent>
                <Titulo>Código Fornecedor</Titulo>
                <Dado>{contratoDetail.numeroControleFornecedor}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>Valor Mensal Atual</Titulo>
                {editing ? (
                  <InputContainer>                  
                    <input
                      type="text"
                      name="valorMensalAtual"
                      value={formData.valorMensalAtual || contratoDetail.valorMensalAtual}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{contratoDetail.valorMensalAtual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Dado>
                )}                
              </CorpoContent>     
              <CorpoContent>
                <Titulo>Valor Mensal Inicial</Titulo>
                <Dado>{contratoDetail.valorMensalInicial.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Dado>
              </CorpoContent>     
              <CorpoContent>
                <Titulo>Percentual Multa</Titulo>
                <Dado>{contratoDetail.percentualMulta}</Dado>
              </CorpoContent>
            </CorpoContainer>

            <CorpoContainer>
              <CorpoContent>
                <Titulo>Objeto Contratual</Titulo>
                {editing ? (
                  <InputContainer>                  
                    <input
                      type="text"
                      name="objetoContratual"
                      value={formData.objetoContratual || contratoDetail.objetoContratual}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{contratoDetail.objetoContratual}</Dado>
                )}
              </CorpoContent>     
              <CorpoContent>
                <Titulo>Nome Gestor</Titulo>
                <Dado>{contratoDetail.gestor.nome}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>CPF Gestor</Titulo>
                <Dado>{contratoDetail.gestor.cpf.replace(
                      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                      '$1.$2.$3-$4'
                )}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>E-mail Gestor</Titulo>
                <Dado>{contratoDetail.gestor.email}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>{"E-mail Síndico(a)"}</Titulo>
                <Dado>{contratoDetail.emailSindico}</Dado>
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
    )
    
}


export default AlterarContrato;