import { HomeContainer, InfosContainer, Banner, ButtonContainer } from "./styles";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <HomeContainer>
      <Banner/>

      <InfosContainer>
        <h1>Atelier Três Rios</h1>
        <h2>(21) 9342-3411</h2>
        <h2>secretaria@tresrios.com.br</h2>
      </InfosContainer>

      <ButtonContainer>
      <Button as="a" href="/Informacoes">Informações</Button> 
      <Button as="a" href="/QuemSomos">Quem Somos</Button> 
      </ButtonContainer>



      <InfosContainer>
        <h1>KNN Condomínios</h1>
        <h2>(21) 9945-6423</h2>
        <h2>contato@knn.com.br</h2>
      </InfosContainer>

     </HomeContainer>
  
  )
}

export default Home;