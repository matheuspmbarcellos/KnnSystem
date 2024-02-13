import { ResultadoContainer, Resultado, Editar, Deletar, Exibir, ButtonContainer } from "./styles";

const ResultadoApartamentos = () => {
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
          <td>00304</td>
          <td>304</td>
          <td>02</td>
          <td>
            <ButtonContainer>
              <Exibir/>
              <Editar/>
              <Deletar/>
            </ButtonContainer>
          </td>
        </tbody>

      </Resultado>

    </ResultadoContainer>

  )
  }
export default ResultadoApartamentos;