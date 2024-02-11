import { ResultadoContainer, Resultado } from "./styles";
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FornecedorContext } from "../../../context/FornecedorContext";

const ResultadoFornecedor = () => {  
  const { fornecedorStore } = useContext(FornecedorContext)


  return (
    <ResultadoContainer>
      <h2>Resultado</h2>
      <Resultado>
        <thead>
          <tr>
          <th>Razão Social</th>
          <th>CNPJ</th>
          <th>Categoria</th>
          <th>Código</th>
          <th>Detalhar</th>
          </tr>
        </thead>
        <tbody>
        {fornecedorStore.map((fornecedor, index) => (
          <tr key={index}>
            <td>{fornecedor.razaoSocial}</td>
            <td>{fornecedor.cnpj}</td>
            <td>{fornecedor.naturezaDoServico}</td>
            <td>{fornecedor.numeroControle}</td>
            <td>
              <Link to={`/DetalharFornecedor/${fornecedor.numeroControle}`}>
                <Button>Detalhar</Button>
              </Link>
            </td>
          </tr>
        ))}
        </tbody>
      </Resultado>
      <Link to={"/BuscarFornecedor"}>
            <Button>Voltar</Button>
      </Link>
    </ResultadoContainer>
  )
}

export default ResultadoFornecedor;