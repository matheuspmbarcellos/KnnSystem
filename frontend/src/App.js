import { BrowserRouter as Router } from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from './components/Navbar';

import { Container, Content } from "./styles";

import Routes from './routes';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Container>
      <Header />
      <Router>        
        <Content>
          <AuthProvider>            
            <Routes>
              <Navbar />
            </Routes>
          </AuthProvider>          
        </Content>        
      </Router>
      <Footer />
    </Container>    
  );
}

export default App;
