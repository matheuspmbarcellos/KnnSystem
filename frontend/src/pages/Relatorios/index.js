import { RelatoriosContainer, ButtonContainer } from "./styles";
import Button from "../../components/Button/Button";

const Relatorios = () => {
  return (
    <RelatoriosContainer>
        <h1>RELATÓRIOS</h1> 
        <ButtonContainer>
          <Button as="a" href="./RelatorioApt">Apartamentos</Button>
          <Button>Boletos em aberto</Button>
          <Button as="a" href="./RelatorioFornecedores">Fornecedores ativos</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button>Despesas por competência</Button>
          <Button>Receitas por competência</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button>Contratos vigentes</Button>
          <Button>Contratos vencidos</Button>
        </ButtonContainer>
    </RelatoriosContainer>
  )
}

export default Relatorios;