import { ResultadoContainer, Resultado, DetailButton, EditButton, DisableButton } from "../../../components/PagesStyles/resultado";
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useContrato } from "../../../context/ContratoContext";
import moment from "moment";

const ResultadoContrato = () => {  
  const { perfil } = useContext(AuthContext)
  const { contratoStore, setContratoDetail } = useContrato()
  const navigate = useNavigate()

  const handleExibirDetail = (contrato) => {
    setContratoDetail(contrato)
    navigate("/DetalharContrato");
  };

  const handleEditar = (contrato) => {
    setContratoDetail(contrato)
    navigate("/AlterarContrato");
  };
  const handleInativar = (contrato) => {
    setContratoDetail(contrato)
    navigate("/InativarContrato");
  };


  return (
    <ResultadoContainer>
      <h2 className="resultado">Resultado</h2>
      <Resultado>
        <thead>
          <tr>
          <th>Número do Contrato</th>
          <th>Código do Fornecedor</th>
          <th>Vigência Inicial</th>
          <th>Vigência Final</th>
          <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {contratoStore?.map((contrato, index) => (
          <tr key={index}>
            <td>{contrato.numeroContrato}</td>
            <td>{contrato.numeroControleFornecedor}</td>
            <td>{moment(contrato.vigenciaInicial).format('DD-MM-YYYY')}</td>
            <td>{moment(contrato.vigenciaFinal).format('DD-MM-YYYY')}</td>
            <td>
                <DetailButton onClick={() => handleExibirDetail(contrato)} />
                <EditButton onClick={() => handleEditar(contrato)} />
                {(perfil === "Administrador") && <DisableButton onClick={() => handleInativar(contrato)} />}
            </td>
          </tr>
        ))}
        </tbody>
      </Resultado>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoContrato;