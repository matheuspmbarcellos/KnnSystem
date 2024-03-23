import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarContent } from './styles'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '../../context/NavigateContext';

const Navbar = () => {
  const {signed} = useContext(AuthContext)
  const navigate = useNavigation()



  if (signed) {
      return (
        <NavbarContainer> 
          <hr/> 
          <NavbarContent> 
            <div className="dropdown">
              <button className="dropbtn" onClick={() => navigate("/BuscarUsuario")}>Usuários</button>
              <div className="dropdown-content">
                  <Link to={"/BuscarUsuario"}>Buscar</Link><hr/>
                  <Link to={"/CadastrarUsuario"}>Cadastrar</Link><hr/>            
              </div>
            </div>
      
            <div className="dropdown" id='pagamento'>
                <button className="dropbtn" onClick={() => navigate("/BuscarApartamento")}>Apartamentos</button>
                <div className="dropdown-content">
                    <Link to={"/BuscarApartamento"}>Buscar</Link><hr/>
                    <Link to={"/CadastrarApartamento"}>Cadastrar</Link><hr/>   
                </div>
            </div>
      
            <div className="dropdown">
              <button className="dropbtn" onClick={() => navigate("/BuscarFornecedor")}>Fornecedores</button>
              <div className="dropdown-content">
                  <Link to={"/BuscarFornecedor"}>Buscar</Link><hr/>
                  <Link to={"/CadastrarFornecedor"}>Cadastrar</Link><hr/>            
              </div>
            </div>
      
            <div className="dropdown">
                <button className="dropbtn" onClick={() => navigate("/BuscarContrato")}>Contratos</button>
                <div className="dropdown-content">
                    <Link to={"/BuscarContrato"}>Buscar</Link><hr/>
                    <Link to={"/CadastrarContrato"}>Cadastrar</Link><hr/>  
                </div>
            </div>
      
            <div className="dropdown">
                <button className="dropbtn" onClick={() => navigate("/ConsultarFatura")}>Faturas</button>
                <div className="dropdown-content">
                    <Link to={"/ConsultarFatura"}>Consultar</Link><hr/>
                    <Link to={"/CadastrarFatura"}>Incluir</Link><hr/>    
                </div>
            </div>
          
            <Link to={"/Relatorios"}>Relatórios</Link>
    
            <Link to={"/ExtratosFinanceiros"}>Extratos Financeiros</Link>
          </NavbarContent>
      </NavbarContainer>  
    )
  }  
}

export default Navbar;