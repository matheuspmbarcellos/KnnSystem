import { ResultadoContainer, Resultado } from "./styles";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const ResultadoFornecedor = ({data}) => {
  return (
    <ResultadoContainer>
      <h2>Resultado</h2>
      <Resultado>
        <thead>
          <tr>
          <td>Razão Social</td>
          <td>CNPJ</td>
          <td>Categoria</td>
          <td>Código</td>
          <td>Detalhar</td>
        </tr>
        </thead>
        <tbody>
          {data.map()}
        </tbody>
      </Resultado>
      <Link to={"/BuscarFornecedor"}>
            <Button>Voltar</Button>
      </Link>
    </ResultadoContainer>
  )
}

export default ResultadoFornecedor;