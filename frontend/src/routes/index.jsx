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
import AlterarStatusFornecedor from '../pages/Fornecedores/AlterarStatus';
import ExcluirFornecedor from '../pages/Fornecedores/Deletar';
import BuscarApartamento from '../pages/Apartamento/Buscar';
import CadastrarApartamento from '../pages/Apartamento/Cadastrar';
import ResultadoApartamento from '../pages/Apartamento/Resultado';
import DetalharApartamento from '../pages/Apartamento/Detalhar';
import AlterarApartamento from '../pages/Apartamento/Alterar';
import Relatorios from '../pages/Relatorios';
import RelatorioFornecedores from '../pages/Relatorios/relatorio-fornecedor';
import RelatorioApt from '../pages/Relatorios/relatorio-apartamento';
import ExtratosFinanceiros from '../pages/ExtratoFinanceiros';
import CadastrarPagamento from '../pages/Pagamento/Cadastrar';
import ConsultarPagamento from '../pages/Pagamento/Buscar';
import ResultadoPagamento from '../pages/Pagamento/Resultado';
import BuscarContrato from '../pages/Contratos/Buscar';
import CadastrarContrato from '../pages/Contratos/Cadastrar';
import ResultadoContrato from '../pages/Contratos/Resultado';
import RelatorioContratosVigentes from '../pages/Relatorios/relatorio-contratos-vigentes';
import AlterarStatusApartamento from '../pages/Apartamento/AlterarStatus';
import ExcluirApartamento from '../pages/Apartamento/Deletar';

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
            <Route path="/AlterarStatusFornecedor" element={<PrivateRoutes />}>
                <Route path="/AlterarStatusFornecedor" element={<AlterarStatusFornecedor />} />
            </Route>
            <Route path="/ExcluirFornecedor" element={<PrivateRoutes />}>
                <Route path="/ExcluirFornecedor" element={<ExcluirFornecedor />} />
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
            <Route path="/AlterarStatusApartamento" element={<PrivateRoutes />}>
                <Route path="/AlterarStatusApartamento" element={<AlterarStatusApartamento />} />
            </Route>
            <Route path="/ExcluirApartamento" element={<PrivateRoutes />}>
                <Route path="/ExcluirApartamento" element={<ExcluirApartamento />} />
            </Route>
            
            {/* Pagamentos */}
            <Route path="/CadastrarPagamento" element={<PrivateRoutes />}>
                <Route path="/CadastrarPagamento" element={<CadastrarPagamento />} />
            </Route>
            <Route path="/ConsultarPagamento" element={<PrivateRoutes />}>
                <Route path="/ConsultarPagamento" element={<ConsultarPagamento />} />
            </Route>
            <Route path="/ResultadoPagamento" element={<PrivateRoutes />}>
                <Route path="/ResultadoPagamento" element={<ResultadoPagamento />} />
            </Route>

            {/* Contrato */}
            <Route path="/BuscarContrato" element={<PrivateRoutes />}>
                <Route path="/BuscarContrato" element={<BuscarContrato />} />
            </Route>
            <Route path="/CadastrarContrato" element={<PrivateRoutes />}>
                <Route path="/CadastrarContrato" element={<CadastrarContrato />} />
            </Route>
            <Route path="/ResultadoContrato" element={<PrivateRoutes />}>
                <Route path="/ResultadoContrato" element={<ResultadoContrato />} />
            </Route>
            {/* 
            <Route path="/DetalharContrato" element={<PrivateRoutes />}>
                <Route path="/DetalharContrato" element={<DetalharContrato />} />
            </Route>
            <Route path="/AlterarContrato" element={<PrivateRoutes />}>
                <Route path="/AlterarContrato" element={<AlterarContrato />} />
            </Route>
            <Route path="/InativarContrato" element={<PrivateRoutes />}>
                <Route path="/InativarContrato" element={<InativarContrato />} />
            </Route> 
            */}

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
            <Route path="/RelatorioContratosVigentes" element={<PrivateRoutes />}>
                <Route path="/RelatorioContratosVigentes" element={<RelatorioContratosVigentes />} />                
            </Route> 

            {/* Extrato */}
            <Route path="/ExtratosFinanceiros" element={<PrivateRoutes />}>
                <Route path="/ExtratosFinanceiros" element={<ExtratosFinanceiros />} />                
            </Route>

        </Routes>
    )
}

export default MainRoutes;