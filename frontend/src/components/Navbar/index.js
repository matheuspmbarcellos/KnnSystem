import { Link } from 'react-router-dom';
import { NavbarContainer } from './styles'

const Navbar = () => {
  return (
    <>
      <hr /> 
      <NavbarContainer>           
        <Link>Fornecedor</Link>
        <Link>Extrato Financeiro</Link>
        <Link>Pagamento</Link>
        <Link>Contratos</Link>
        <Link>Apartamentos</Link>
        <Link>Relatórios</Link>
      </NavbarContainer>
    </>  
  )
}

export default Navbar;