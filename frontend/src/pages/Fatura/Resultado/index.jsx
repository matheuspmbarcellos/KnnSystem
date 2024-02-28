import { ResultadoContainer, Resultado } from "../../../components/PagesStyles/resultado";
import Button from "../../../components/Button/Button";
import { useNavigation } from "../../../context/NavigateContext";
import { useFatura } from "../../../context/FaturaContext";
import moment from "moment";

const ResultadoFatura = () => {  
  const { faturaStore } = useFatura()
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
          {faturaStore?.map((fatura, index) => (
            <tr key={index}>
              <td>{fatura.numeroDoContrato}</td>
              <td>{fatura.numeroDaFatura}</td>
              <td>{fatura.cnpjDoFornecedor.replace(
                    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
                    '$1.$2.$3/$4-$5'
                  )}
              </td>
              <td>{fatura.razaoSocial}</td>
              <td>{fatura.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
              <td>{moment(fatura.competencia).format('DD-MM-YYYY').replace(/-/g,"/")}</td>
              <td>{fatura.status}</td>
            </tr>
          ))}
        </>
        </tbody>
      </Resultado>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoFatura;