import { AlterarContainer, PageContainer,
   CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import Button from "../../../components/Button/Button";
import { useNavigation } from "../../../context/NavigateContext";
import { useUsuario } from "../../../context/UsuarioContext";
import moment from "moment";


const AlterarStatusUsuario = () => {
  const { usuarioDetail, inativarUsuario, ativarUsuario } = useUsuario();
  const navigate = useNavigation();

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
                {(usuarioDetail.status === "ATIVO") && <Button onClick={() => inativarUsuario(usuarioDetail.cpf)} className="warning">Inativar</Button>}
                  {(usuarioDetail.status === "INATIVO") && <Button onClick={() => ativarUsuario(usuarioDetail.cpf)} className="activate">Ativar</Button>}
              </center>
            </CorpoContainer> 
          </AlterarContainer>
        </PageContainer>
      ) : (
        <p>Nenhum Usuário selecionado</p>
        )}
  </>
    )
    
}


export default AlterarStatusUsuario;