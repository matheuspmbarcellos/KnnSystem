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
        {fornecedorStore.map((item, index) => (
          <tr key={index}>
            <td>{item.razaoSocial}</td>
            <td>{item.cnpj}</td>
            <td>{item.naturezaDoServico}</td>
            <td>{item.numeroControle}</td>
            <td>
              <Link to={`/DetalhesFornecedor/${item.id}`}>
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