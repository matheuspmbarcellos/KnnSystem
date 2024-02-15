import { RelatoriosContainer, ButtonContainer } from "./styles";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Relatorios = () => {
  const navigate = useNavigate()

  return (
    <RelatoriosContainer>
        <h1>RELATÓRIOS</h1> 
        <ButtonContainer>
          <Button onClick={() => navigate("/RelatorioApt")}>Apartamentos</Button>
          <Button onClick={() => {}}>Boletos em aberto</Button>
          <Button onClick={() => navigate("/RelatorioFornecedores")}>Fornecedores ativos</Button>
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