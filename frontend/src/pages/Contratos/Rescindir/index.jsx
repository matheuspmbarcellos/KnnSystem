import { CadastrarContainer, CheckboxContainer, BodyContainer, CheckboxGroup } from "./styles";
import Button from "../../../components/Button/Button";

const RescindirContratos = () => {

  return (
    <CadastrarContainer><br/>
        <h1>{`Contrato [Numero] | Razão Social`}</h1>
       <BodyContainer>
        <CheckboxGroup>

          
         <CheckboxContainer>  
           <label>
           <input type="checkbox" /> 
           </label>  Rescisão pelo contratante
          </CheckboxContainer> 

          <CheckboxContainer>  
           <label>
           <input type="checkbox" />
           </label>  Rescisão pelo fornecedor
          </CheckboxContainer> 

        </CheckboxGroup>

        Motivação:


        </BodyContainer><br/>
        <Button>Cadastrar</Button>
    </CadastrarContainer>
  )
}

export default RescindirContratos;