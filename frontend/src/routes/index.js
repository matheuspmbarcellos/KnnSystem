import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Esqueci from '../pages/Login/Esqueci';
import BuscarFornecedor from '../pages/Fornecedores/Buscar';
import CadastrarFornecedor from '../pages/Fornecedores/Cadastrar';
import ResultadoFornecedor from '../pages/Fornecedores/Resultado';
import Pagamento from '../pages/Pagamento';
import ExtratosFinanceiros from '../pages/ExtratoFinanceiros';
import Contratos from '../pages/Contratos';
import CadastrarContrato from '../pages/Contratos/Cadastrar'
import Apartamentos from '../pages/Apartamentos';
import Relatorios from '../pages/Relatorios';
import { PrivateRoutes } from './privateRoutes';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Esqueci" element={<Esqueci />}/>

            <Route path="/BuscarFornecedor" element={<PrivateRoutes />}>
                <Route path="/BuscarFornecedor" element={<BuscarFornecedor />} />
            </Route>
            <Route path="/CadastrarFornecedor" element={<PrivateRoutes />}>
                <Route path="/CadastrarFornecedor" element={<CadastrarFornecedor />} />
            </Route>
            <Route path="/ResultadoFornecedor" element={<PrivateRoutes />}>
                <Route path="/ResultadoFornecedor" element={<ResultadoFornecedor />} />
            </Route>
            <Route path="/Pagamento" element={<PrivateRoutes />}>
                <Route path="/Pagamento" element={<Pagamento />} />
            </Route>
            <Route path="/ExtratosFinanceiros" element={<PrivateRoutes />}>
                <Route path="/ExtratosFinanceiros" element={<ExtratosFinanceiros />} />
            </Route>
            <Route path="/Contratos" element={<PrivateRoutes />}>
                <Route path="/Contratos" element={<Contratos />} />
            </Route>
            <Route path="/CadastrarContrato" element={<PrivateRoutes />}>
                <Route path="/CadastrarContrato" element={<CadastrarContrato />} />
            </Route>
            <Route path="/Apartamentos" element={<PrivateRoutes />}>
                <Route path="/Apartamentos" element={<Apartamentos />} />                
            </Route>
            <Route path="/Relatorios" element={<PrivateRoutes />}>
                <Route path="/Relatorios" element={<Relatorios />} />                
            </Route>
        </Routes>
    )
}

export default MainRoutes;