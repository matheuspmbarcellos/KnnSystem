import { HomeContainer, InfosContainer, Valores } from "./styles";
const QuemSomos = () => {
  return (
    <HomeContainer>

      <InfosContainer>

      <h1>Nossa Missão</h1>
     <p>Entregar à sociedade sistemas para otimizar a gestão de condomínios 
      em ambiente de constantes mudanças e inovações 
     alicerçada em seus valores</p>

     <h1>Nossos Valores</h1>
     <Valores>
     <li>Inovação</li>
     <li>  Agilidade      </li>
     <li>  Sustentabilidade</li>
     <li> Confiabilidade</li>
     <li>  Responsabilidade  </li>      
     <li>  Sucesso do cliente</li>
      </Valores>
      </InfosContainer>

     </HomeContainer>
  
  )
}

export default QuemSomos;