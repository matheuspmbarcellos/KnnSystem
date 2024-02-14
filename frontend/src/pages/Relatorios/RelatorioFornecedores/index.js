import { RelatoriosContainer, Resultado } from "../styles"
import Button from "../../../components/Button/Button";

const RelatorioFornecedores = () => {
  return (
    <RelatoriosContainer>
        <h1>Fornecedores</h1> 
        <Resultado>
        <thead>
          <tr>
          <th>Número de cadastro</th>
          <th>CNPJ</th>
          <th>Razão social</th>
          <th>Nome do responsável</th>
          </tr>
        </thead>
        <tbody>
          <td>101</td>
          <td>60.444.437/0001-46</td>
          <td>Jardim S.A</td>
          <td>Fulano</td>
        </tbody>
      </Resultado>
      <Button>Salvar Relatório</Button>
    </RelatoriosContainer>
  )
}

export default RelatorioFornecedores;
