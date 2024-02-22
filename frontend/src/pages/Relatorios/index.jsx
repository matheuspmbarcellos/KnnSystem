import { RelatoriosContainer, ButtonContainer } from "./styles";
import Button from "../../components/Button/Button";
import { useApartamento } from "../../context/ApartamentoContext";
import { useFornecedor } from "../../context/FornecedorContext";
import { useContrato } from "../../context/ContratoContext";

const Relatorios = () => {
  const { gerarRelatorioContratosVigentes } = useContrato();
  const { gerarRelatorioContratosVencidos } = useContrato();
  const { gerarRelatorioApartamento } = useApartamento();
  const { gerarRelatorioFornecedor } = useFornecedor();

  return (
    <RelatoriosContainer>
        <h1>RELATÓRIOS</h1> 
        <ButtonContainer>
          <Button onClick={() => gerarRelatorioContratosVigentes()}>Contratos vigentes</Button>
          <Button onClick={() => gerarRelatorioContratosVencidos()}>Contratos vencidos</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={() => gerarRelatorioApartamento()}>Apartamentos</Button>
        </ButtonContainer>      
        <ButtonContainer>
          <Button onClick={() => gerarRelatorioFornecedor()}>Fornecedores ativos</Button>
        </ButtonContainer>
   
    </RelatoriosContainer>
  )
}

export default Relatorios;