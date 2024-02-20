import { CadastrarContainer, InputContainer, BodyContainer } from "../../../components/PagesStyles/cadastrar";
import Button from "../../../components/Button/Button";

const NivelServico = () => {

  return (
    <CadastrarContainer><br/>
        <h1>{`Contrato [Numero] | Razão Social`}</h1>
       <BodyContainer>
       <InputContainer> 
        <input type='text' placeholder='% de nível de serviço'/>
        <input type='text' placeholder='% de Desconto'/>
        </InputContainer> 

        </BodyContainer>
        <Button>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default NivelServico;