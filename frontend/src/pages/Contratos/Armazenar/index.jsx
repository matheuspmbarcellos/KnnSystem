import { ArmazenarContainer, Resultado, IncluirButton, DetailButton, ButtonContainer } from "../../../components/PagesStyles/contrato";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const ArmazenarContratos = () => {  
  const navigate = useNavigate()

  const handleExibirDetail = () => {
    navigate("/AlterarContrato");
  };


  return (
    <ArmazenarContainer>
      <h2>Armazenar Documentos</h2>
      <Resultado>
        <thead>
          <tr>
          <th>Documentos</th>
          <th></th>
          </tr>
        </thead>

        <tbody>
            <td>Contrato 03456</td>
            <td> <DetailButton onClick={() => handleExibirDetail("./DetalharContrato")} /></td>

        </tbody>

      </Resultado>
      <ButtonContainer>
       <IncluirButton onClick={() => handleExibirDetail("./DetalharContrato")}>Incluir novo documento</IncluirButton>
       <Button onClick={() => navigate(-1)}>Voltar</Button>
      </ButtonContainer>
    </ArmazenarContainer>
  )
}

export default ArmazenarContratos;