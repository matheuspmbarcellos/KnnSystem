import { AlterarContainer, PageContainer,
   CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { useContrato } from "../../../context/ContratoContext";
import moment from "moment";


const AlterarStatusContrato = () => {
  const { contratoDetail, inativarContrato, ativarContrato } = useContrato();
  const navigate = useNavigate();

  return (
    <>
    {contratoDetail ? (
        <PageContainer>
          <p className="title">{`Contrato [${contratoDetail.numeroContrato}]`}<span className={`${contratoDetail.status}`}> {contratoDetail.status}</span></p>
          <AlterarContainer>
            <CorpoContainer>
              <CorpoContent>
                <Titulo>Vigência</Titulo>
                <Dado><em>Início: </em> {moment(contratoDetail.vigenciaInicial).format('DD-MM-YYYY').replace(/-/g,"/")}</Dado>
                <Dado><em>Término: </em> {moment(contratoDetail.vigenciaFinal).format('DD-MM-YYYY').replace(/-/g,"/")}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>Código Fornecedor</Titulo>
                <Dado>{contratoDetail.numeroControleFornecedor}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>Valor Mensal Atual</Titulo>
                <Dado>{contratoDetail.valorMensalAtual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Dado>
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
                <Dado>{contratoDetail.objetoContratual}</Dado>
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
                  {(contratoDetail.status === "ATIVO") && <Button onClick={() => inativarContrato(contratoDetail.id)} className="warning">Inativar</Button>}
                  {(contratoDetail.status === "INATIVO") && <Button onClick={() => ativarContrato(contratoDetail.id)} className="activate">Ativar</Button>}
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


export default AlterarStatusContrato;