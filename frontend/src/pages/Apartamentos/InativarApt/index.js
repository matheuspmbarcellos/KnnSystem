import { InativarContainer, ApartamentosContainer, SubtituloContainer, CorpoContainer, ButtonContainer } from "./styles";
import Button from "../../../components/Button/Button";

const InativarApt = () => {

  return (
    <ApartamentosContainer>
        <h1>Apartamento</h1>

        <SubtituloContainer>
           <h2>Número de Controle</h2><li/>
           <h2>Status</h2>
        </SubtituloContainer>

      <InativarContainer>

          <CorpoContainer>
            <titulo>Número do Apartamento</titulo>
            <dado>208</dado>
            <titulo>Bloco</titulo>
            <dado>02</dado>  
            <titulo>Metragem</titulo>
            <dado>70m2</dado>

          </CorpoContainer>

        </InativarContainer>
          
        <ButtonContainer> 
          <Button as="a">Inativar</Button>
          </ButtonContainer>

    </ApartamentosContainer>
  )
}


export default InativarApt;