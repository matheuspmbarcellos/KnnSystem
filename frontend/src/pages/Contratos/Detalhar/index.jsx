import { AlterarContainer, PageContainer, SubtituloContainer, CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";

const DetalharContrato = () => {
  const navigate = useNavigate();

  return (
        <PageContainer>
          <p className="title">{`Contrato [Numero] | Razão Social`}</p>

            <SubtituloContainer>
              <ul>
                  <li><p>{`CNPJ: 33333333`}</p></li>
                  <li><p>{`Serviço/Produto`}</p></li>           
                 <li> <p>{`Ativo`}</p></li>
              </ul> 
          </SubtituloContainer>

          <AlterarContainer>

            <CorpoContainer>   

              <CorpoContent>
                <Titulo>Vigência</Titulo>
                <Dado>De: 03.04.22</Dado> 
                <Dado>A: 03.06.2025</Dado>
              </CorpoContent><br/> 
          
              <CorpoContent>
                <Titulo>Valor</Titulo>
                <Dado>Inicial: R$1000</Dado> 
                  <Dado>Atual: R$1.100</Dado> 
              </CorpoContent> <br/>

              <CorpoContent>
              <Titulo>Percentual de Multa</Titulo>
                <Dado>5%</Dado>
              </CorpoContent> 

              </CorpoContainer>

          <CorpoContainer>

              
          <CorpoContent>
                <Titulo>Gestor do contrato</Titulo>
                <Dado>Fulano</Dado>
                <Dado>111.002.633-46</Dado>
                <Dado>fulano@gmail.com</Dado> 
             </CorpoContent><br/><br/>

              <CorpoContent>
                <Titulo>Síndico</Titulo>
                <Dado>Sicrano</Dado>
                <Dado>sicrano@gmail.com</Dado> 
              </CorpoContent>

              <Button onClick={() => navigate(-1)}>Voltar</Button>


              </CorpoContainer>

            
            
            </AlterarContainer>

          </PageContainer>
  )}
    


export default DetalharContrato;