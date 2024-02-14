import { ExtratosContainer, ResultadoContainer, Resultado } from "./styles";
import ExtratosFinanceiros from "..";

const ExtratosResultado = () => {
  return (
    <ExtratosContainer>
      <ExtratosFinanceiros/>

        <ResultadoContainer>
          <h1>Demonstrativo de Entradas e Saídas - Condomínio Atelier Três Rios</h1>
        
          <Resultado>
          <thead>
          <tr>
              <th>ENTRADAS</th>
              <th></th>
              <th>Valor</th>
          </tr>
          </thead>

          <tbody>
          <tr>
              <td></td>
              <td>Saldo anterior em conta corrente:</td>
              <td>R$ 1560,00</td>
          </tr>
          <tr>
              <td>38 taxas</td>
              <td>Taxas de condomínio recebidas - entradas no extrato:</td>
              <td>R$ 1360,00</td>
          </tr>
          <tr>
              <td></td>
              <td><b>TOTAL</b></td>
              <td>R$ 2920,00</td>
          </tr>
          </tbody>


          <thead>
          <tr>
              <th>Data</th>
              <th>Gastos</th>
              <th>Valor</th>
          </tr>
          </thead>
           
          <tbody>
          <tr>
              <td>06 - 11 - 2022</td>
              <td>Limpeza - 02-11</td>
              <td>R$ 60,00</td>
          </tr>
          </tbody>
          </Resultado>

        </ResultadoContainer>
    </ExtratosContainer>
  )
}

export default ExtratosResultado;