import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from './components/Navbar';

import Routes from './routes';

import { Container, Content } from "./assets/styles";


const App = () => {
  return (
    <Container>
      <Header />    
      <Content>          
        <Navbar />
        <Routes />          
      </Content>
      <Footer />
    </Container>    
  );
}

export default App;
