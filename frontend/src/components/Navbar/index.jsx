import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarContent } from './styles'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const {signed} = useContext(AuthContext);

  if (signed) {
      return (
        <NavbarContainer>
          <hr/> 
          <NavbarContent> 
            <div className="dropdown">
              <button className="dropbtn"><Link to={"/BuscarFornecedor"}>Fornecedores</Link></button>
              <div className="dropdown-content">
                  <Link to={"/BuscarFornecedor"}>Buscar</Link><hr/>
                  <Link to={"/CadastrarFornecedor"}>Cadastrar</Link><hr/>            
              </div>
            </div>
      
            <Link to={"/ExtratosFinanceiros"}>Extratos Financeiros</Link>
      
      
            <div className="dropdown">
                <button className="dropbtn"><Link to={"/ConsultarPagamento"}>Pagamento</Link></button>
                <div className="dropdown-content">
                    <Link to={"/ConsultarPagamento"}>Consultar</Link><hr/>
                    <Link to={"/CadastrarPagamento"}>Incluir</Link><hr/>    
                </div>
            </div>
          
            <div className="dropdown">
                <button className="dropbtn"><Link to={"/BuscarContratos"}>Contratos</Link></button>
                <div className="dropdown-content">
                    <Link to={"/BuscarContratos"}>Buscar</Link><hr/>
                    <Link to={"/CadastrarContratos"}>Cadastrar</Link><hr/>  
                </div>
            </div>
      
            <div className="dropdown">
                <button className="dropbtn"><Link to={"/BuscarApartamento"}>Apartamentos</Link></button>
                <div className="dropdown-content">
                    <Link to={"/BuscarApartamento"}>Buscar</Link><hr/>
                    <Link to={"/CadastrarApartamento"}>Cadastrar</Link><hr/>   
                </div>
            </div>
    
            <Link to={"/Relatorios"}>Relatórios</Link>
          </NavbarContent>
      </NavbarContainer>  
    )
  }  
}

export default Navbar;