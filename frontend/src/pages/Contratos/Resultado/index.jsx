import { ResultadoContainer, Resultado, DetailButton, EditButton, TerminateButton, DeleteButton, ActivateButton, InactivateButton, ReadjustButton } from "../../../components/PagesStyles/resultado";
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useContrato } from "../../../context/ContratoContext";
import moment from "moment";
import { useNavigation } from "../../../context/NavigateContext";

const ResultadoContrato = () => {  
  const { perfil } = useContext(AuthContext)
  const { contratoStore, setContratoDetail } = useContrato()
  const navigate = useNavigation()

  const handleExibirDetail = (contrato) => {
    setContratoDetail(contrato)
    navigate("/DetalharContrato");
  };

  const handleEditar = (contrato) => {
    setContratoDetail(contrato)
    navigate("/AlterarContrato");
  };
  const handleAlterarStatus = (contrato) => {
    setContratoDetail(contrato)
    navigate("/AlterarStatusContrato");
  };
  const handleReajustar = (contrato) => {
    setContratoDetail(contrato)
    navigate("/ReajustarContrato");
  };
  const handleRescindir = (contrato) => {
    setContratoDetail(contrato)
    navigate("/RescindirContrato");
  };
  const handleExcluir = (contrato) => {
    setContratoDetail(contrato)
    navigate("/ExcluirContrato");
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
        {(contratoStore && contratoStore.length > 0) ? (
          contratoStore
            .sort((a, b) => {
              const statusComparison = a.status.localeCompare(b.status);
              if (statusComparison !== 0) {
                return statusComparison;
              }
              return a.vigenciaFinal.localeCompare(b.vigenciaFinal);
            })
            .map((contrato, index) => (
          <tr key={index}>
            <td>{contrato.numeroContrato}<span className={`${contrato.status}`}> {contrato.status}</span></td>
            <td>{contrato.numeroControleFornecedor}</td>
            <td>{moment(contrato.vigenciaInicial).format('DD-MM-YYYY').replace(/-/g,"/")}</td>
            <td>{moment(contrato.vigenciaFinal).format('DD-MM-YYYY').replace(/-/g,"/")}</td>
            <td>
                <DetailButton onClick={() => handleExibirDetail(contrato)} title="Detalhar" />
                <EditButton onClick={() => handleEditar(contrato)} title="Alterar" />
                <ReadjustButton onClick={() => handleReajustar(contrato)} title="Reajustar"/>
                {(contrato.status === "RESCINDIDO") ?  (
                  <TerminateButton onClick={() => handleRescindir(contrato)} disabled />
                ) : (<TerminateButton onClick={() => handleRescindir(contrato)} title="Rescindir" />)}
                {(perfil === "Administrador") && <DeleteButton onClick={() => handleExcluir(contrato)} title="Excluir" />}
                {(contrato.status === "ATIVO") && <ActivateButton onClick={() => handleAlterarStatus(contrato)} title="Desativar"/>}
                {(contrato.status === "INATIVO") && <InactivateButton onClick={() => handleAlterarStatus(contrato)} title="Ativar"/>}
                {(contrato.status === "RESCINDIDO") && <InactivateButton onClick={() => handleAlterarStatus(contrato)} disabled/>}
            </td>
          </tr>
            ))
            ) : (
              <tr>
                <td colSpan="5">Nenhum Contrato encontrado</td>
              </tr>
            )}
        </tbody>
      </Resultado>
      <Button onClick={() => navigate("/BuscarContrato")}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoContrato;