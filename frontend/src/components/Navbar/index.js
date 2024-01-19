import { Link } from 'react-router-dom';
import { NavbarContainer } from './styles'

const Navbar = () => {
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

export default Navbar;