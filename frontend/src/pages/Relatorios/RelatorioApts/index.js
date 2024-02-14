import { RelatoriosContainer, Resultado } from "./styles";
import Button from "../../../components/Button/Button";

const RelatorioApt = () => {
  return (
    <RelatoriosContainer>
        <h1>RELATÓRIOS</h1> 
        <Resultado>
        <thead>
          <tr>
          <th>Apt.</th>
          <th>Bloco</th>
          <th>Nome do proprietário</th>
          <th>Telefone do proprietário</th>
          <th>CPF do proprietário</th>
          <th>E-mail do proprietário</th>
          <th>Nome do morador</th>
          <th>Telefone do morador</th>
          <th>CPF do morador</th>
          <th>E-mail do morador</th>
          <th>Metragem do imóvel</th>
          </tr>
        </thead>
        <tbody>
          <td>101</td>
          <td>01</td>
          <td>Fulano</td>
          <td>2045-3145</td>
          <td>102.446.966-06</td>
          <td>fulano@gmail.com</td>
          <td>Sicrano</td>
          <td>2045-3145</td>
          <td>102.446.966-06</td>
          <td>sicrano@gmail.com</td>
          <td>70m2</td>
        </tbody>
      </Resultado>
      <Button>Salvar Relatório</Button>
    </RelatoriosContainer>
  )
}

export default RelatorioApt;
