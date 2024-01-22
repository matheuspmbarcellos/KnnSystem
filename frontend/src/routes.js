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
                path="/Fornecedores"
                element={<Fornecedores />}
            />
            <Route 
                path="/Fornecedores/Cadastrar"
                element={<CadastrarFornecedor />}
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
                path="/Apartamentos"
                element={<Apartamentos />}
            />
            <Route 
                path="/Relatorios"
                element={<Relatorios />}
            />
        </Routes>
    )
}

export default MainRoutes;