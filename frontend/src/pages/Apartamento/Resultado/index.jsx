import { ResultadoContainer, Resultado, DetailButton,
   EditButton, DisableButton } from "../../../components/PagesStyles/resultado";
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApartamentoContext } from "../../../context/ApartamentoContext";

const ResultadoApartamento = () => {  
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
  const handleInativar = (apartamento) => {
    setApartamentoDetail(apartamento)
    navigate("/InativarApartamento");
  };


  return (
    <ResultadoContainer>
      <h2>Resultado</h2>
      <Resultado>
        <thead>
          <tr>
            <th>Número do Controle</th>
            <th>Número do Apartamento</th>
            <th>Bloco</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        <>        
          {apartamentoStore?.map((apartamento, index) => (
            <tr key={index}>
              <td>{apartamento.id}</td>
              <td>{apartamento.morador.numeroDoApartamento}</td>
              <td>{apartamento.morador.blocoDoApartamento}</td>
              <td>
                  <DetailButton onClick={() => handleExibirDetail(apartamento)} />
                  <EditButton onClick={() => handleEditar(apartamento)} />
                  <DisableButton onClick={() => handleInativar(apartamento)} />
              </td>
            </tr>
          ))}
        </>
        </tbody>
      </Resultado>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoApartamento;