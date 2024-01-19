import { ContratosContainer, InputContainer } from "./styles";
import Button from "../../components/Button/Button";
import MenuCRUD from "../../components/MenuCRUD";

const Contratos = () => {
  return (
    <ContratosContainer>
        <h1>CONTRATOS</h1>
        <MenuCRUD/>
        <InputContainer> 
        <input type='text' placeholder=' Número de Controle'/> 
        <input type='text' placeholder=' Razão Social do Fornecedor'/>
        <input type='text' placeholder=' CPNJ do Fornecedor'/>
        </InputContainer> 
        <Button>Exibir</Button>

    </ContratosContainer>
  )
}

export default Contratos;