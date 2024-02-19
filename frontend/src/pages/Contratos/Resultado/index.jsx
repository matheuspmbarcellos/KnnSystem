import { ResultadoContainer, Resultado, DetailButton } from "./styles";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const ResultadoContrato = () => {  
  const navigate = useNavigate()

  const handleExibirDetail = () => {
    navigate("/DetalharContrato");
  };


  return (
    <ResultadoContainer>
      <h2>Resultado</h2>
      <Resultado>
        <thead>
          <tr>
          <th>Número de controle do contrato</th>
          <th>Razão social do fornecedor</th>
          <th>CNPJ do fornecedor</th>
          <th>Vigência inicial</th>
          <th>Vigêncial final</th>
          <th>Nível de Serviço</th>
          <th></th>
          </tr>
        </thead>

        <tbody>
            <td>11111</td>
            <td>1111</td>
            <td>111</td>
            <td>22.06.2023</td>
            <td>22.06.2025</td>
            <td><Button>Cadastrar</Button> </td>
            <td> <DetailButton onClick={() => handleExibirDetail("./DetalharContrato")} /></td>

        </tbody>

      </Resultado>
      <Button>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoContrato;