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
        <h3>Atelier Três Rios</h3>
        <h4>(21) 9342-3411</h4>
        <h4>secretaria@tresrios.com.br</h4>
      </InfosContainer>

      <InfosContainer>
        <h3>KNN Condomínios</h3>
        <h4>(21) 9945-6423</h4>
        <h4>contato@knn.com.br</h4>
      </InfosContainer>

     </HomeContainer>
  
  )
}

export default Home;