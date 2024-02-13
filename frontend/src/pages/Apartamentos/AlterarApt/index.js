import { AlterarContainer, ApartamentosContainer, SubtituloContainer, CorpoContainer, ButtonContainer } from "./styles";
import Button from "../../../components/Button/Button";
const AlterarApt = () => {

  return (
    <ApartamentosContainer>
        <h1>Apartamento</h1>

        <SubtituloContainer>
           <h2>Número de Controle</h2><li/>
           <h2>Status</h2>
        </SubtituloContainer>

        <AlterarContainer>
        
          <CorpoContainer>
            <titulo>Número do Apartamento</titulo>
            <dado>208</dado>
            <titulo>Bloco</titulo>
            <dado>02</dado>  
            <titulo>Metragem</titulo>
            <dado>70m2</dado>

          </CorpoContainer>

        </AlterarContainer>
          
        <ButtonContainer> 
          <Button as="a">Alterar</Button>
          </ButtonContainer>

    </ApartamentosContainer>
  )
}


export default AlterarApt;