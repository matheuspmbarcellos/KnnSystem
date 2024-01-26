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
          <Link to={"/Fornecedores"}>Fornecedores</Link>
          <Link to={"/ExtratosFinanceiros"}>Extratos Financeiros</Link>
          <Link to={"/Pagamento"}>Pagamento</Link>
          <Link to={"/Contratos"}>Contratos</Link>
          <Link to={"/Apartamentos"}>Apartamentos</Link>
          <Link to={"/Relatorios"}>Relatórios</Link>
        </NavbarContainer>
      </>  
    )
  }  
}

export default Navbar;