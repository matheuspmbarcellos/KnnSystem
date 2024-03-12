import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarContent } from './styles'

const Navbar = () => {


      return (
        <NavbarContainer>
          <hr/> 
            
          <NavbarContent> 
          <div className="dropdown">
              <button className="dropbtn"><Link to={"/BuscarUsuario"}>Usuários</Link></button>
              <div className="dropdown-content">
                  <Link to={"/BuscarUsuario"}>Buscar</Link><hr/>
                  <Link to={"/CadastrarUsuario"}>Cadastrar</Link><hr/>
                  <Link to={"/AlterarUsuario"}>Alterar</Link><hr/>
                  <Link to={"/InativarUsuario"}>Inativar</Link><hr/>              
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn"><Link to={"/BuscarFornecedor"}>Fornecedores</Link></button>
              <div className="dropdown-content">
                  <Link to={"/BuscarFornecedor"}>Buscar</Link><hr/>
                  <Link to={"/CadastrarFornecedor"}>Cadastrar</Link><hr/>
                  <Link to={"/AlterarFornecedor"}>Alterar</Link><hr/>
                  <Link to={"/InativarFornecedor"}>Inativar</Link><hr/>              
              </div>
            </div>
      
            <Link to={"/ExtratosFinanceiros"}>Extratos Financeiros</Link>
      
      
            <div className="dropdown">
                <button className="dropbtn"><Link to={"/BuscarPagamentos"}>Pagamento</Link></button>
                <div className="dropdown-content">
                    <Link to={"/BuscarPagamentos"}>Buscar</Link><hr/>
                    <Link to={"/CadastrarPagamentos"}>Cadastrar</Link><hr/>
                    <Link to={"/AlterarPagamentos"}>Alterar</Link><hr/>
                    <Link to={"/InativarPagamentos"}>Inativar</Link><hr/>      
                </div>
            </div>
          
            <div className="dropdown">
                <button className="dropbtn"><Link to={"/BuscarContratos"}>Contratos</Link></button>
                <div className="dropdown-content">
                    <Link to={"/BuscarContratos"}>Buscar</Link><hr/>
                    <Link to={"/CadastrarContratos"}>Cadastrar</Link><hr/>
                    <Link to={"/AlterarContratos"}>Alterar</Link><hr/>
                    <Link to={"/ArmazenarContratos"}>Armazenar</Link><hr/>   
                    <Link to={"/RescindirContratos"}>Rescindir</Link><hr/>      
                    <Link to={"/InativarContratos"}>Inativar</Link><hr/>      
   
                </div>
            </div>
      
            <div className="dropdown">
                <button className="dropbtn"><Link to={"/BuscarApartamentos"}>Apartamentos</Link></button>
                <div className="dropdown-content">
                    <Link to={"/BuscarApartamentos"}>Buscar</Link><hr/>
                    <Link to={"/CadastrarApartamentos"}>Cadastrar</Link><hr/>
                    <Link to={"/AlterarApartamentos"}>Alterar</Link><hr/>
                    <Link to={"/InativarApartamentos"}>Inativar</Link><hr/>      
                </div>
            </div>
    
            <Link to={"/Relatorios"}>Relatórios</Link>
          </NavbarContent>
      </NavbarContainer>  
    ) 
}

export default Navbar;