import { Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './privateRoutes';

import Home from '../pages/Home';
import Informacoes from '../pages/Home/Informacoes';
import QuemSomos from '../pages/Home/QuemSomos';
import Login from '../pages/Login';
import Esqueci from '../pages/Login/Esqueci';
import BuscarFornecedor from '../pages/Fornecedores/Buscar';
import CadastrarFornecedor from '../pages/Fornecedores/Cadastrar';
import ResultadoFornecedor from '../pages/Fornecedores/Resultado';
import DetalharFornecedor from '../pages/Fornecedores/Detalhar';
import AlterarFornecedor from '../pages/Fornecedores/Alterar';
import InativarFornecedor from '../pages/Fornecedores/Inativar';
import BuscarApartamento from '../pages/Apartamento/Buscar';
import CadastrarApartamento from '../pages/Apartamento/Cadastrar';
import ResultadoApartamento from '../pages/Apartamento/Resultado';
import DetalharApartamento from '../pages/Apartamento/Detalhar';
import AlterarApartamento from '../pages/Apartamento/Alterar';
import InativarApartamento from '../pages/Apartamento/Inativar';
import Relatorios from '../pages/Relatorios';
import RelatorioFornecedores from '../pages/Relatorios/relatorio-fornecedor';
import RelatorioApt from '../pages/Relatorios/relatorio-apartamento';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Informacoes" element={<Informacoes />}/>
            <Route path="/QuemSomos" element={<QuemSomos />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Esqueci" element={<Esqueci />}/>

            {/* Fornecedor */}
            <Route path="/BuscarFornecedor" element={<PrivateRoutes />}>
                <Route path="/BuscarFornecedor" element={<BuscarFornecedor />} />
            </Route>
            <Route path="/CadastrarFornecedor" element={<PrivateRoutes />}>
                <Route path="/CadastrarFornecedor" element={<CadastrarFornecedor />} />
            </Route>
            <Route path="/ResultadoFornecedor" element={<PrivateRoutes />}>
                <Route path="/ResultadoFornecedor" element={<ResultadoFornecedor />} />
            </Route>
            <Route path="/DetalharFornecedor" element={<PrivateRoutes />}>
                <Route path="/DetalharFornecedor" element={<DetalharFornecedor />} />
            </Route>
            <Route path="/AlterarFornecedor" element={<PrivateRoutes />}>
                <Route path="/AlterarFornecedor" element={<AlterarFornecedor />} />
            </Route>
            <Route path="/InativarFornecedor" element={<PrivateRoutes />}>
                <Route path="/InativarFornecedor" element={<InativarFornecedor />} />
            </Route>

            {/* Apartamento */}
            <Route path="/BuscarApartamento" element={<PrivateRoutes />}>
                <Route path="/BuscarApartamento" element={<BuscarApartamento />} />
            </Route>
            <Route path="/CadastrarApartamento" element={<PrivateRoutes />}>
                <Route path="/CadastrarApartamento" element={<CadastrarApartamento />} />
            </Route>
            <Route path="/ResultadoApartamento" element={<PrivateRoutes />}>
                <Route path="/ResultadoApartamento" element={<ResultadoApartamento />} />
            </Route>
            <Route path="/DetalharApartamento" element={<PrivateRoutes />}>
                <Route path="/DetalharApartamento" element={<DetalharApartamento />} />
            </Route>
            <Route path="/AlterarApartamento" element={<PrivateRoutes />}>
                <Route path="/AlterarApartamento" element={<AlterarApartamento />} />
            </Route>
            <Route path="/InativarApartamento" element={<PrivateRoutes />}>
                <Route path="/InativarApartamento" element={<InativarApartamento />} />
            </Route>

            {/* Relatorios */}
            <Route path="/Relatorios" element={<PrivateRoutes />}>
                <Route path="/Relatorios" element={<Relatorios />} />                
            </Route> 
            <Route path="/RelatorioFornecedores" element={<PrivateRoutes />}>
                <Route path="/RelatorioFornecedores" element={<RelatorioFornecedores />} />                
            </Route> 
            <Route path="/RelatorioApt" element={<PrivateRoutes />}>
                <Route path="/RelatorioApt" element={<RelatorioApt />} />                
            </Route> 

            

            {/* <Route path="/Pagamento" element={<PrivateRoutes />}>
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
            */}
        </Routes>
    )
}

export default MainRoutes;