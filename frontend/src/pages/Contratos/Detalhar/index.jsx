import { AlterarContainer, PageContainer, SubtituloContainer, CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";

const DetalharContrato = () => {
  const navigate = useNavigate();

  return (
        <PageContainer>
          <p className="title">{`Contrato 01 `}</p>

            <SubtituloContainer>
              <ul>
                  <li><p>{`Razão Social: 1111111111`}</p></li>           
                  <li><p>{`CNPJ: 33333333`}</p></li>
                 <li> <p>{`Status: Ativo`}</p></li>
              </ul> 
          </SubtituloContainer>

          <AlterarContainer>

            <CorpoContainer>
              <CorpoContent>
                <Titulo>Número de controle do contrato</Titulo>
                <Dado>01</Dado>
              </CorpoContent>
             
              <CorpoContent>
                <Titulo>Serviço/Produto</Titulo>
                <Dado>Jardinagem</Dado>
              </CorpoContent>     

              <CorpoContent>
                <Titulo>Vigência</Titulo>
                <Dado>De: 03.04.24</Dado> <Dado>A: 03.06.2025</Dado> 
              </CorpoContent>    
            
          
              </CorpoContainer>

            </AlterarContainer>
            <center className="bottom">
                  <Button onClick={() => navigate(-1)}>Voltar</Button>
              </center>
          </PageContainer>
  )}
    


export default DetalharContrato;