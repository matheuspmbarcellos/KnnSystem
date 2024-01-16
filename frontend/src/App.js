import { BrowserRouter as Router } from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from './components/Navbar';

import { Container, Content } from "./styles";

import Routes from './routes';

const App = () => {
  return (
    <Container>
      <Header>KnnSystem</Header>
      <Router>
        <Navbar />
        <Content>
          <Routes />
        </Content>        
      </Router>
      <Footer />
    </Container>    
  );
}

export default App;
