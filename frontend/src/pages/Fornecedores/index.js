import { FornecedoresContainer, ButtonContainer } from "./styles";
import Button from "../../components/Button/Button";

const Fornecedores = () => {
  return (
    <FornecedoresContainer>
        <h1>FORNECEDORES</h1>
        <ButtonContainer>
          <Button secondary as="a" href="./Home">BUSCAR</Button>
          <Button secondary as="a" href="./Home">CADASTRAR</Button>
          <Button secondary as="a" href="./Home">ALTERAR</Button>
          <Button secondary as="a" href="./Home">INATIVAR</Button>
        </ButtonContainer>
        <input type='text' placeholder=' CNPJ'/>
        <input type='text' placeholder=' Código'/>
        <input type='text' placeholder=' Razão Social'/>
        <input type='text' placeholder=' Número do Contrato'/>
    </FornecedoresContainer>
  )
}

export default Fornecedores;