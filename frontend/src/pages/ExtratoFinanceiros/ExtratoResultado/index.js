import { ExtratosContainer, ResultadoContainer} from "./styles";
import ExtratosFinanceiros from "..";

const ExtratosResultado = () => {
  return (
    <ExtratosContainer>
      <ExtratosFinanceiros/>
        <ResultadoContainer>
          <h1>Demonstrativo de Entradas e Saídas</h1>
          <h2>ENTRADAS</h2>
        </ResultadoContainer>
    </ExtratosContainer>
  )
}

export default ExtratosResultado;