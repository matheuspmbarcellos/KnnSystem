import { ResultadoContainer, Resultado } from "../../../components/PagesStyles/resultado";
import Button from "../../../components/Button/Button";
import { useNavigation } from "../../../context/NavigateContext";
import { usePagamento } from "../../../context/PagamentoContext";
import moment from "moment";

const ResultadoPagamento = () => {  
  const { pagamentoStore } = usePagamento()
  const navigate = useNavigation()


  return (
    <ResultadoContainer>
      <h2 className="resultado">Resultado</h2>
      <Resultado>
        <thead>
          <tr>
            <th>Número do Contrato</th>
            <th>Número da Fatura</th>
            <th>CNPJ do Fornecedor</th>
            <th>Razão Social</th>
            <th>Valor</th>
            <th>Competência</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        <>        
          {pagamentoStore?.map((pagamento, index) => (
            <tr key={index}>
              <td>{pagamento.numeroDoContrato}</td>
              <td>{pagamento.numeroDaFatura}</td>
              <td>{pagamento.cnpjDoFornecedor.replace(
                    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
                    '$1.$2.$3/$4-$5'
                  )}
              </td>
              <td>{pagamento.razaoSocial}</td>
              <td>{pagamento.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
              <td>{moment(pagamento.competencia).format('DD-MM-YYYY')}</td>
              <td>{pagamento.status}</td>
            </tr>
          ))}
        </>
        </tbody>
      </Resultado>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoPagamento;