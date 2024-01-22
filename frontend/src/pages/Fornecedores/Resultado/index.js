import { ResultadoContainer, Resultado } from "./styles";
import Button from "../../../components/Button/Button";

const ResultadoFornecedor = () => {
  return (
    <ResultadoContainer>
      <h1>Resultado</h1>
      <Resultado>
<td>Razão Social</td>
<td>CNPJ</td>
<td>Categoria</td>
<td>Código</td>
<td>Detalhar</td>
      </Resultado>
      <Button as="a" href="/Fornecedores">Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoFornecedor;