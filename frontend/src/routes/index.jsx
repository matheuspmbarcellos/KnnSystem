import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Informacoes from '../pages/Home/Informacoes';
import QuemSomos from '../pages/Home/QuemSomos';
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
import RelatorioApt from '../pages/Relatorios/RelatorioApts';
import RelatorioFornecedores from '../pages/Relatorios/RelatorioFornecedores';
import DetalharFornecedor from '../pages/Fornecedores/Detalhar';
import AlterarFornecedor from '../pages/Fornecedores/Alterar';
import InativarFornecedor from '../pages/Fornecedores/Inativar';
import ExtratosResultado from '../pages/ExtratoFinanceiros/ExtratoResultado';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Informacoes" element={<Informacoes />}/>
            <Route path="/QuemSomos" element={<QuemSomos />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Esqueci" element={<Esqueci />}/>
            <Route path="/BuscarFornecedor" element={<BuscarFornecedor />} />
            <Route path="/CadastrarFornecedor" element={<CadastrarFornecedor />} />
            <Route path="/ResultadoFornecedor" element={<ResultadoFornecedor />} />
            <Route path="/DetalharFornecedor" element={<DetalharFornecedor />} />
            <Route path="/AlterarFornecedor" element={<AlterarFornecedor />} />
            <Route path="/InativarFornecedor" element={<InativarFornecedor />} />
            <Route path="/Pagamento" element={<Pagamento />} />
            <Route path="/ExtratosFinanceiros" element={<ExtratosFinanceiros />} />       
            <Route path="/ExtratosResultado" element={<ExtratosResultado />} />                         
            <Route path="/Contratos" element={<Contratos />} />
            <Route path="/CadastrarContrato" element={<CadastrarContrato />} />
            <Route path="/Apartamentos" element={<Apartamentos />} />                
            <Route path="/Relatorios" element={<Relatorios />} />                
            <Route path="/RelatorioApt" element={<RelatorioApt />} />                
            <Route path="/RelatorioFornecedores" element={<RelatorioFornecedores />} />                

        </Routes>
    )
}

export default MainRoutes;