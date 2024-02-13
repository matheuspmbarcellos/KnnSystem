import { ResultadoContainer, Resultado, DetailButton, EditButton, DisableButton } from "./styles";
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FornecedorContext } from "../../../context/FornecedorContext";

const ResultadoFornecedor = () => {  
  const { fornecedorStore, setFornecedorDetail } = useContext(FornecedorContext)
  const navigate = useNavigate()

  const handleExibirDetail = (fornecedor) => {
    setFornecedorDetail(fornecedor)
    navigate("/DetalharFornecedor");
  };

  const handleEditar = (fornecedor) => {
    setFornecedorDetail(fornecedor)
    navigate("/AlterarFornecedor");
  };
  const handleInativar = (fornecedor) => {
    setFornecedorDetail(fornecedor)
    navigate("/InativarFornecedor");
  };


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
          <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {fornecedorStore?.map((fornecedor, index) => (
          <tr key={index}>
            <td>{fornecedor.razaoSocial}</td>
            <td>{fornecedor.cnpj}</td>
            <td>{fornecedor.naturezaDoServico}</td>
            <td>{fornecedor.numeroControle}</td>
            <td>
                <DetailButton onClick={() => handleExibirDetail(fornecedor)} />
                <EditButton onClick={() => handleEditar(fornecedor)} />
                <DisableButton onClick={() => handleInativar(fornecedor)} />
            </td>
          </tr>
        ))}
        </tbody>
      </Resultado>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoFornecedor;