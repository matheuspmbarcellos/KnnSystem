import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuemSomos from './pages/Home/QuemSomos';
import Informacoes from './pages/Home/Informacoes';
import Login from './pages/Login';
import EmailEnviado from './pages/Login/EmailEnviado';
import Fornecedores from './pages/Fornecedores';
import Pagamento from './pages/Pagamento';
import ConsultarFaturas from './pages/Pagamento/Consultar';
import ExtratosFinanceiros from './pages/ExtratoFinanceiros';
import ExtratosResultado from './pages/ExtratoFinanceiros/ExtratoResultado';
import Contratos from './pages/Contratos';
import Apartamentos from './pages/Apartamentos';
import Relatorios from './pages/Relatorios';
import CadastrarFornecedor from './pages/Fornecedores/Cadastrar';
import BuscarFornecedor from './pages/Fornecedores/Buscar';
import ResultadoFornecedor from './pages/Fornecedores/Resultado';
import AlterarFornecedor from './pages/Fornecedores/AlterarFornecedor';
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
                path="/EmailEnviado"
                element={<EmailEnviado />}
            />
        <Route 
                path="/QuemSomos"
                element={<QuemSomos/>}
            />
        <Route 
                path="/Informacoes"
                element={<Informacoes/>}
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
                path="/AlterarFornecedor"
                element={<AlterarFornecedor />}
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
                path="/ConsultarFaturas"
                element={<ConsultarFaturas />}
            />
            <Route 
                path="/ExtratosFinanceiros"
                element={<ExtratosFinanceiros />}
            />
         <Route 
                path="/ExtratosResultado"
                element={<ExtratosResultado />}
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