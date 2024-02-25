import { ResultadoContainer, Resultado, DetailButton,
   EditButton, 
   ActivateButton,
   DeleteButton,
   InactivateButton} from "../../../components/PagesStyles/resultado";
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApartamentoContext } from "../../../context/ApartamentoContext";
import { AuthContext } from "../../../context/AuthContext";

const ResultadoApartamento = () => {    
  const { perfil } = useContext(AuthContext)
  const { apartamentoStore, setApartamentoDetail } = useContext(ApartamentoContext)
  const navigate = useNavigate()

  const handleExibirDetail = (apartamento) => {
    setApartamentoDetail(apartamento)
    navigate("/DetalharApartamento");
  };

  const handleEditar = (apartamento) => {
    setApartamentoDetail(apartamento)
    navigate("/AlterarApartamento");
  };
  const handleAlterarStatus = (apartamento) => {
    setApartamentoDetail(apartamento)
    navigate("/AlterarStatusApartamento");
  };
  const handleExcluir = (apartamento) => {
    setApartamentoDetail(apartamento)
    navigate("/ExcluirApartamento");
  };


  return (
    <ResultadoContainer>
      <h2 className="resultado">Resultado</h2>
      <Resultado>
        <thead>
          <tr>
            <th>Apartamento</th>
            <th>Bloco</th>
            <th>Proprietário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>                
        {(apartamentoStore && apartamentoStore.length > 0) ? (
          apartamentoStore
          .sort((a, b) => {
            const statusComparison = a.status.localeCompare(b.status);
            if (statusComparison !== 0) {
              return statusComparison;
            }
            return a.morador.numeroDoApartamento - b.morador.numeroDoApartamento;
          })
            .map((apartamento, index) => (
            <tr key={index}>
              <td>{apartamento.morador.numeroDoApartamento}<span className={`${apartamento.status}`}> {apartamento.status}</span></td>
              <td>{apartamento.morador.blocoDoApartamento}</td>
              <td>{apartamento.proprietario.nome}</td>
              <td>
              <DetailButton onClick={() => handleExibirDetail(apartamento)} title="Detalhar" />
                  <EditButton onClick={() => handleEditar(apartamento)} title="Editar" />
                  {(apartamento.status === "ATIVO") && <ActivateButton onClick={() => handleAlterarStatus(apartamento)} title="Inativar"/>}
                  {(apartamento.status === "INATIVO") && <InactivateButton onClick={() => handleAlterarStatus(apartamento)} title="Ativar"/>}
                  {(perfil === "Administrador") && <DeleteButton onClick={() => handleExcluir(apartamento)} title="Excluir"/>}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">Nenhum Apartamento encontrado</td>
          </tr>
        )}
        </tbody>
      </Resultado>
      <Button onClick={() => navigate("/BuscarApartamento")}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoApartamento;