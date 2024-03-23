import { AlterarContainer, PageContainer, CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import Button from "../../../components/Button/Button";
import { useNavigation } from "../../../context/NavigateContext";
import { useUsuario } from "../../../context/UsuarioContext";
import moment from "moment";


const DetalharUsuario = () => {
  const { usuarioDetail } = useUsuario();
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
                <Titulo>E-mail</Titulo>
                <Dado>{usuarioDetail.email}</Dado>
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
              </CorpoContainer>  
              <CorpoContainer>
                <center className="bottom">
                  <Button onClick={() => navigate(-1)}>Voltar</Button>
                </center>
              </CorpoContainer> 
            </AlterarContainer>
          </PageContainer>
      ) : (
        <p>Nenhum Usuario selecionado</p>
        )}
  </>
    )
    
}


export default DetalharUsuario;