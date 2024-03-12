import { AlterarContainer, PageContainer, CorpoContainer, Titulo, Dado } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const InativarUsuario= () => {  
  const navigate = useNavigate();

  return (
        <PageContainer>
          <p className="title">{`Usuário X` }</p>

          <AlterarContainer>

            <CorpoContainer>   

            <Titulo>Cargo</Titulo>
                <Dado>Síndico</Dado>  <br/> 
          
                <Titulo>Telefone</Titulo>
                <Dado>(21) 2534-5467</Dado> <br/>

           <Titulo>E-mail</Titulo>
                <Dado>usuario@gmail.com</Dado><br/>
                </CorpoContainer>   

                <CorpoContainer>  
                  
                <Titulo>CPF</Titulo>
                <Dado>102.443.0011-25</Dado>  <br/> 
          

                <Titulo>Data de nascimento</Titulo>
                <Dado>05.10.1976</Dado><br/>

              </CorpoContainer>

              <CorpoContainer>  
                  <Button onClick={() => navigate(-1)}>Voltar</Button>
                  <Button>Inativar</Button>
                </CorpoContainer>
            
            </AlterarContainer>


          </PageContainer>
  )}
    

export default InativarUsuario;