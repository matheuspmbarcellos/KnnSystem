import { AlterarContainer, PageContainer,
   CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import Button from "../../../components/Button/Button";
import { useNavigation } from "../../../context/NavigateContext";
import moment from "moment";
import { useUsuario } from "../../../context/UsuarioContext";


const ExcluirUsuario = () => {
  const { usuarioDetail, excluirUsuario } = useUsuario();
  const navigate = useNavigation();

  const handleExclusao = () => {
    const confirmacao = window.confirm(`Esta ação não poderá ser desfeita. Deseja continuar?`);
    if (confirmacao) {
      excluirUsuario(usuarioDetail.id);
    }
  }

  return (
    <>
    {usuarioDetail ? (
        <PageContainer>
          <p className="title">{usuarioDetail.nome}<span className={`${usuarioDetail.status}`}> {usuarioDetail.status}</span></p>
          
          <AlterarContainer>
            <CorpoContainer>
              <CorpoContent>
                <Titulo>Nome</Titulo>
                <Dado>{usuarioDetail.nome}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>CPF</Titulo>
                <Dado>{usuarioDetail.cpf.replace(
                      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                      '$1.$2.$3-$4'
                )}
                </Dado>
              </CorpoContent>    
              <CorpoContent>
                <Titulo>Telefone</Titulo>
                <Dado>{usuarioDetail.telefone}</Dado>
              </CorpoContent>    
            </CorpoContainer>

            <CorpoContainer>
            <CorpoContent>
                <Titulo>Cargo</Titulo>
                <Dado>{usuarioDetail.cargo}</Dado>
              </CorpoContent>    
              <CorpoContent>
                <Titulo>Data de Nascimento</Titulo>
                <Dado>{moment(usuarioDetail.dataNascimento).format('DD-MM-YYYY').replace(/-/g,"/")}</Dado>
              </CorpoContent>       
              <CorpoContent>
                <Titulo>E-mail</Titulo>
                <Dado>{usuarioDetail.email}</Dado>
              </CorpoContent>    
              </CorpoContainer>  
            <CorpoContainer>
              <center className="bottom">
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                <Button onClick={() => handleExclusao()} className="warning">Excluir</Button>
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


export default ExcluirUsuario;