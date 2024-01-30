import { Link } from 'react-router-dom';
import { NavbarContainer } from './styles'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const {signed} = useContext(AuthContext);

  if (signed) {
      return (
        <>
        <hr/> 
        <NavbarContainer>   
     
        <div class="dropdown">
          <button class="dropbtn"><a href="./BuscarFornecedor">Fornecedores</a></button>
           <div class="dropdown-content">
              <Link to={"/Fornecedores"}>Buscar</Link><hr/>
              <Link to={"/CadastrarFornecedor"}>Cadastrar</Link><hr/>
              <Link to={"/AlterarFornecedor"}>Alterar</Link><hr/>
              <Link to={"/InativarFornecedor"}>Inativar</Link><hr/>              
           </div>
      </div>
  
      <Link to={"/ExtratosFinanceiros"}>Extratos Financeiros</Link>
  
  
      <div class="dropdown">
          <button class="dropbtn"><a href="./BuscarPagamentos">Pagamento</a></button>
           <div class="dropdown-content">
              <Link to={"/BuscarPagamentos"}>Buscar</Link><hr/>
              <Link to={"/CadastrarPagamentos"}>Cadastrar</Link><hr/>
              <Link to={"/AlterarPagamentos"}>Alterar</Link><hr/>
              <Link to={"/InativarPagamentos"}>Inativar</Link><hr/>      
           </div>
      </div>
      
      <div class="dropdown">
          <button class="dropbtn"><a href="./BuscarContratos">Contratos</a></button>
           <div class="dropdown-content">
              <Link to={"/BuscarContratos"}>Buscar</Link><hr/>
              <Link to={"/CadastrarContratos"}>Cadastrar</Link><hr/>
              <Link to={"/AlterarContratos"}>Alterar</Link><hr/>
              <Link to={"/InativarContratos"}>Inativar</Link><hr/>      
           </div>
      </div>
  
      <div class="dropdown">
          <button class="dropbtn"><a href="./BuscarApartamentos">Apartamentos</a></button>
           <div class="dropdown-content">
              <Link to={"/BuscarApartamentos"}>Buscar</Link><hr/>
              <Link to={"/CadastrarApartamentos"}>Cadastrar</Link><hr/>
              <Link to={"/AlterarApartamentos"}>Alterar</Link><hr/>
              <Link to={"/InativarApartamentos"}>Inativar</Link><hr/>      
           </div>
      </div>
  
          <Link to={"/Relatorios"}>Relatórios</Link>
        </NavbarContainer>
      </>  
    )
  }  
}

export default Navbar;