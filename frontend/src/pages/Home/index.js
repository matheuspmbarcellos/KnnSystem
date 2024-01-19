import { HomeContainer, InfosContainer, Banner } from "./styles";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <HomeContainer>
      <Banner></Banner>
      <center> 
      <Button>Informações</Button> 
      <Button>Quem Somos</Button> 
      </center>

      <InfosContainer>
        <h1>Atelier Três Rios</h1>
        <h2>(21) 9342-3411</h2>
        <h2>secretaria@tresrios.com.br</h2>
      </InfosContainer>

      <InfosContainer>
        <h1>KNN Condomínios</h1>
        <h2>(21) 9945-6423</h2>
        <h2>contato@knn.com.br</h2>
      </InfosContainer>

     </HomeContainer>
  
  )
}

export default Home;