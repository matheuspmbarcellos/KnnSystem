import { ExtratosContainer, FormContainer, RowContainer  } from "./styles";

import Button from "../../components/Button/Button";

const ExtratosFinanceiros = () => {
  return (
    <ExtratosContainer>
      <h1>Extratos Financeiros</h1>
      
      <form>
        <RowContainer>
          <FormContainer>
            <label>Mês/Ano de início</label>
            <input type="month" name="inicio" />
          </FormContainer>

         <FormContainer>
           <label>Mês/Ano de fim:</label>
           <input type="month" name="fim" />
          </FormContainer>

         <Button>Buscar</Button>
        </RowContainer>
      </form>

    </ExtratosContainer>
  )
}

export default ExtratosFinanceiros;