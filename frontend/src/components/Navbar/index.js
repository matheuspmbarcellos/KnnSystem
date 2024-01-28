import { Link } from 'react-router-dom';
import { NavbarContainer } from './styles'


const Navbar = () => {
  return (
    <>
      <hr/> 
      <NavbarContainer>   
   
      <div class="dropdown">
        <button class="dropbtn">Fornecedores</button>
         <div class="dropdown-content">
            <a href="#">Buscar</a><hr/>
            <a href="#">Cadastrar</a><hr/>
            <a href="#">Alterar</a><hr/>
            <a href="#">Inativar</a><hr/>
         </div>
    </div>

    <Link to={"/ExtratosFinanceiros"}>Extratos Financeiros</Link>


    <div class="dropdown">
        <button class="dropbtn">Pagamento</button>
         <div class="dropdown-content">
            <a href="#">Buscar</a><hr/>
            <a href="#">Cadastrar</a><hr/>
            <a href="#">Alterar</a><hr/>
            <a href="#">Inativar</a><hr/>
         </div>
    </div>
    
    <div class="dropdown">
        <button class="dropbtn">Contratos</button>
         <div class="dropdown-content">
            <a href="#">Buscar</a><hr/>
            <a href="#">Cadastrar</a><hr/>
            <a href="#">Alterar</a><hr/>
            <a href="#">Inativar</a><hr/>
         </div>
    </div>

    <div class="dropdown">
        <button class="dropbtn">Apartamentos</button>
         <div class="dropdown-content">
            <a href="./BuscarApartamentos">Buscar</a><hr/>
            <a href="./CadastrarApartamentos">Cadastrar</a><hr/>
            <a href="./AlterarApartamentos">Alterar</a><hr/>
            <a href="./InativarApartamentos#">Inativar</a><hr/>
         </div>
    </div>

        <Link to={"/Relatorios"}>Relatórios</Link>
      </NavbarContainer>
    </>  
  )
}

export default Navbar;