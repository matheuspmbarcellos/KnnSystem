import { useContext } from "react";
import { AlterarContainer, PageContainer, SubtituloContainer,
   CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import { ApartamentoContext } from "../../../context/ApartamentoContext";
import Button from "../../../components/Button/Button";
import { useNavigation } from "../../../context/NavigateContext";


const AlterarStatusApartamento = () => {
  const { apartamentoDetail, inativarApartamento, ativarApartamento } = useContext(ApartamentoContext);
  const navigate = useNavigation();

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
              <Dado>{apartamentoDetail.proprietario.nome}</Dado>
            </CorpoContent>
            <CorpoContent>
              <Titulo>CPF Proprietário</Titulo>
              <Dado>{apartamentoDetail.proprietario.cpf.replace(
                      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                      '$1.$2.$3-$4'
              )}
              </Dado>
            </CorpoContent>    
            <CorpoContent>
              <Titulo>Telefone Proprietário</Titulo>
              <Dado>{apartamentoDetail.proprietario.telefone}</Dado>
            </CorpoContent>    
            <CorpoContent>
              <Titulo>E-mail Proprietário</Titulo>
              <Dado>{apartamentoDetail.proprietario.email}</Dado>
            </CorpoContent>    
          </CorpoContainer>

          <CorpoContainer>
            <CorpoContent>
              <Titulo>Nome Morador</Titulo>
              <Dado>{apartamentoDetail.morador.nome}</Dado>
            </CorpoContent>
            <CorpoContent>
              <Titulo>CPF Morador</Titulo>
              <Dado>{apartamentoDetail.morador.cpf.replace(
                      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                      '$1.$2.$3-$4'
              )}
              </Dado>
            </CorpoContent>    
            <CorpoContent>
              <Titulo>Telefone Morador</Titulo>
              <Dado>{apartamentoDetail.morador.telefone}</Dado>
            </CorpoContent>    
            <CorpoContent>
              <Titulo>E-mail Morador</Titulo>
              <Dado>{apartamentoDetail.morador.email}</Dado>
            </CorpoContent>    
            </CorpoContainer>  
            <CorpoContainer>
              <center className="bottom">
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                {(apartamentoDetail.status === "ATIVO") && <Button onClick={() => inativarApartamento(apartamentoDetail.id)} className="warning">Inativar</Button>}
                  {(apartamentoDetail.status === "INATIVO") && <Button onClick={() => ativarApartamento(apartamentoDetail.id)} className="activate">Ativar</Button>}
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


export default AlterarStatusApartamento;