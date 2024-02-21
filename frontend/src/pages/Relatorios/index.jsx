import { RelatoriosContainer, ButtonContainer } from "./styles";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Relatorios = () => {
  const navigate = useNavigate()

  return (
    <RelatoriosContainer>
        <h1>RELATÓRIOS</h1> 
        <ButtonContainer>
          <Button onClick={() => navigate("/RelatorioContratosVigentes")}>Contratos vigentes</Button>
          <Button onClick={() => navigate("/RelatorioContratosVencidos")}>Contratos vencidos</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={() => navigate("/RelatorioFornecedores")}>Fornecedores ativos</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={() => navigate("/RelatorioApt")}>Apartamentos</Button>
        </ButtonContainer>      
   
    </RelatoriosContainer>
  )
}

export default Relatorios;