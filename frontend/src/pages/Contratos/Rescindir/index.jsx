import { CadastrarContainer, CheckboxContainer, BodyContainer, ResultadoContainer, FormContainer } from "./styles";
import Button from "../../../components/Button/Button";

const RescindirContratos = () => {

  return (
    <CadastrarContainer><br/>
        <h1>{`Contrato [Numero] | Razão Social`}</h1>
      
      <BodyContainer>
        <form>
        <CheckboxContainer>  

        <FormContainer>
          <label> Data da rescisão:</label> 
           <input type='date'/>
          </FormContainer>

            <input type="checkbox" /> 
            <label>Pelo contratante </label>  

            <input type="checkbox" /> 
            <label> Pelo fornecedor </label> 
        </CheckboxContainer> 
            
          <FormContainer>
          <input type='text' placeholder='Motivação'/>
          <Button>Rescindir</Button> 

          </FormContainer>
    </form>


         </BodyContainer>

          <ResultadoContainer>
          Valor da Rescisão:
          <h1>R$50,00</h1>
          </ResultadoContainer>
            


    </CadastrarContainer>
  )
}

export default RescindirContratos;
