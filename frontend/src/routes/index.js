import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Fornecedores from '../pages/Fornecedores';
import Pagamento from '../pages/Pagamento';
import ExtratosFinanceiros from '../pages/ExtratoFinanceiros';
import Contratos from '../pages/Contratos';
import Apartamentos from '../pages/Apartamentos';
import Relatorios from '../pages/Relatorios';
import { PrivateRoutes } from './privateRoutes';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />

            <Route path="/Fornecedores" element={<PrivateRoutes />}>
                <Route path="/Fornecedores" element={<Fornecedores />} />
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