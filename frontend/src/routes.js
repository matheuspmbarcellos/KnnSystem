import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Fornecedores from './pages/Fornecedores';
import Pagamento from './pages/Pagamento';
import ExtratosFinanceiros from './pages/ExtratoFinanceiros';
import Contratos from './pages/Contratos';
import Apartamentos from './pages/Apartamentos';
import Relatorios from './pages/Relatorios';
import CadastrarFornecedor from './pages/Fornecedores/Cadastrar';
import BuscarFornecedor from './pages/Fornecedores/Cadastrar copy';
import ResultadoFornecedor from './pages/Fornecedores/Resultado';
import Esqueci from './pages/Login/Esqueci';
import CadastrarContrato from './pages/Contratos/Cadastrar';
import BuscarApartamentos from './pages/Apartamentos/Buscar';
import CadastrarApartamentos from './pages/Apartamentos/Cadastrar';
import InativarApartamentos from './pages/Apartamentos/Inativar';
import AlterarApartamentos from './pages/Apartamentos/Alterar';
import ResultadoApartamento from './pages/Apartamentos/Resultado';
import AlterarApt from './pages/Apartamentos/AlterarApt';

const MainRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home />}
            />
            <Route 
                path="/Login"
                element={<Login />}
            />

            <Route 
                path="/Esqueci"
                element={<Esqueci />}
            />

            <Route 
                path="/Fornecedores"
                element={<Fornecedores />}
            />
            <Route 
                path="/BuscarFornecedor"
                element={<BuscarFornecedor />}
            /> 
            <Route 
                path="/CadastrarFornecedor"
                element={<CadastrarFornecedor />}
            /> 

            <Route 
                path="/ResultadoFornecedor"
                element={<ResultadoFornecedor />}
            /> 

            <Route 
                path="/Pagamento"
                element={<Pagamento />}
            />
            <Route 
                path="/ExtratosFinanceiros"
                element={<ExtratosFinanceiros />}
            />
            <Route 
                path="/Contratos"
                element={<Contratos />}
            />
            <Route 
                path="/CadastrarContrato"
                element={<CadastrarContrato />}
            />

            <Route 
                path="/Apartamentos"
                element={<Apartamentos />}
            />
         <Route 
                path="/BuscarApartamentos"
                element={<BuscarApartamentos />}
            />
              <Route 
                path="/CadastrarApartamentos"
                element={<CadastrarApartamentos />}
            />
              <Route 
                path="/InativarApartamentos"
                element={<InativarApartamentos />}
            />
            <Route 
                path="/AlterarApartamentos"
                element={<AlterarApartamentos />}
            />

            <Route 
                path="/AlterarApt"
                element={<AlterarApt />}
            />

            <Route 
                path="/ResultadoApartamento"
                element={<ResultadoApartamento />}
            /> 
            <Route 
                path="/Relatorios"
                element={<Relatorios />}
            />
        </Routes>
    )
}

export default MainRoutes;