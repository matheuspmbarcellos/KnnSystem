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
import CadastrarFatura from '../pages/Fatura/Cadastrar';
import ConsultarFatura from '../pages/Fatura/Buscar';
import ResultadoFatura from '../pages/Fatura/Resultado';
import BuscarContrato from '../pages/Contratos/Buscar';
import CadastrarContrato from '../pages/Contratos/Cadastrar';
import ResultadoContrato from '../pages/Contratos/Resultado';
import RelatorioContratosVigentes from '../pages/Relatorios/relatorio-contratos-vigentes';
import AlterarStatusApartamento from '../pages/Apartamento/AlterarStatus';
import ExcluirApartamento from '../pages/Apartamento/Deletar';
import RescindirContrato from '../pages/Contratos/Rescindir';
import DetalharContrato from '../pages/Contratos/Detalhar';
import AlterarContrato from '../pages/Contratos/Alterar';
import AlterarStatusContrato from '../pages/Contratos/Alterar Status';
import ExcluirContrato from '../pages/Contratos/Deletar';
import ReajustarContrato from '../pages/Contratos/Reajustar';
import RelatorioContratosVencidos from '../pages/Relatorios/relatorio-contratos-vencidos';
import { PrivateRoutesAdmin } from './privateRoutesAdmin';
import { NoAuthorization } from '../pages/NoAuthorization';
import CadastrarUsuario from '../pages/Usuario/Cadastrar';
import BuscarUsuario from '../pages/Usuario/Buscar';
import ResultadoUsuario from '../pages/Usuario/Resultado';
import DetalharUsuario from '../pages/Usuario/Detalhar';
import AlterarStatusUsuario from '../pages/Usuario/AlterarStatus';
import ExcluirUsuario from '../pages/Usuario/Deletar';
import AlterarUsuario from '../pages/Usuario/Alterar';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Informacoes" element={<Informacoes />}/>
            <Route path="/QuemSomos" element={<QuemSomos />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Esqueci" element={<Esqueci />}/>
            <Route path="/acessoBloqueado" element={<NoAuthorization />}/>

            {/* Usuario */}
            <Route path="/BuscarUsuario" element={<PrivateRoutesAdmin />}>
                <Route path="/BuscarUsuario" element={<BuscarUsuario />} />
            </Route>
            <Route path="/CadastrarUsuario" element={<PrivateRoutesAdmin />}>
                <Route path="/CadastrarUsuario" element={<CadastrarUsuario />} />
            </Route>
            <Route path="/ResultadoUsuario" element={<PrivateRoutesAdmin />}>
                <Route path="/ResultadoUsuario" element={<ResultadoUsuario />} />
            </Route>
            <Route path="/DetalharUsuario" element={<PrivateRoutesAdmin />}>
                <Route path="/DetalharUsuario" element={<DetalharUsuario />} />
            </Route>
            <Route path="/AlterarUsuario" element={<PrivateRoutesAdmin />}>
                <Route path="/AlterarUsuario" element={<AlterarUsuario />} />
            </Route>
            <Route path="/AlterarStatusUsuario" element={<PrivateRoutesAdmin />}>
                <Route path="/AlterarStatusUsuario" element={<AlterarStatusUsuario />} />
            </Route>
            <Route path="/ExcluirUsuario" element={<PrivateRoutesAdmin />}>
                <Route path="/ExcluirUsuario" element={<ExcluirUsuario />} />
            </Route> 

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
            <Route path="/ExcluirFornecedor" element={<PrivateRoutesAdmin />}>
                <Route path="/ExcluirFornecedor" element={<ExcluirFornecedor />} />
            </Route>


            {/* Apartamento */}
            <Route path="/BuscarApartamento" element={<PrivateRoutesAdmin />}>
                <Route path="/BuscarApartamento" element={<BuscarApartamento />} />
            </Route>
            <Route path="/CadastrarApartamento" element={<PrivateRoutesAdmin />}>
                <Route path="/CadastrarApartamento" element={<CadastrarApartamento />} />
            </Route>
            <Route path="/ResultadoApartamento" element={<PrivateRoutesAdmin />}>
                <Route path="/ResultadoApartamento" element={<ResultadoApartamento />} />
            </Route>
            <Route path="/DetalharApartamento" element={<PrivateRoutesAdmin />}>
                <Route path="/DetalharApartamento" element={<DetalharApartamento />} />
            </Route>
            <Route path="/AlterarApartamento" element={<PrivateRoutesAdmin />}>
                <Route path="/AlterarApartamento" element={<AlterarApartamento />} />
            </Route>
            <Route path="/AlterarStatusApartamento" element={<PrivateRoutesAdmin />}>
                <Route path="/AlterarStatusApartamento" element={<AlterarStatusApartamento />} />
            </Route>
            <Route path="/ExcluirApartamento" element={<PrivateRoutesAdmin />}>
                <Route path="/ExcluirApartamento" element={<ExcluirApartamento />} />
            </Route>
            
            {/* Faturas */}
            <Route path="/CadastrarFatura" element={<PrivateRoutes />}>
                <Route path="/CadastrarFatura" element={<CadastrarFatura />} />
            </Route>
            <Route path="/ConsultarFatura" element={<PrivateRoutes />}>
                <Route path="/ConsultarFatura" element={<ConsultarFatura />} />
            </Route>
            <Route path="/ResultadoFatura" element={<PrivateRoutes />}>
                <Route path="/ResultadoFatura" element={<ResultadoFatura />} />
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
            <Route path="/DetalharContrato" element={<PrivateRoutes />}>
                <Route path="/DetalharContrato" element={<DetalharContrato />} />
            </Route>
            <Route path="/AlterarContrato" element={<PrivateRoutes />}>
                <Route path="/AlterarContrato" element={<AlterarContrato />} />
            </Route>
            <Route path="/RescindirContrato" element={<PrivateRoutes />}>
                <Route path="/RescindirContrato" element={<RescindirContrato />} />
            </Route>
            <Route path="/AlterarStatusContrato" element={<PrivateRoutes />}>
                <Route path="/AlterarStatusContrato" element={<AlterarStatusContrato />} />
            </Route>
            <Route path="/ExcluirContrato" element={<PrivateRoutesAdmin />}>
                <Route path="/ExcluirContrato" element={<ExcluirContrato />} />
            </Route> 
            <Route path="/ReajustarContrato" element={<PrivateRoutes />}>
                <Route path="/ReajustarContrato" element={<ReajustarContrato />} />
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
            <Route path="/RelatorioContratosVigentes" element={<PrivateRoutes />}>
                <Route path="/RelatorioContratosVigentes" element={<RelatorioContratosVigentes />} />                
            </Route> 
            <Route path="/RelatorioContratosVencidos" element={<PrivateRoutes />}>
                <Route path="/RelatorioContratosVencidos" element={<RelatorioContratosVencidos />} />                
            </Route> 

            {/* Extrato */}
            <Route path="/ExtratosFinanceiros" element={<PrivateRoutes />}>
                <Route path="/ExtratosFinanceiros" element={<ExtratosFinanceiros />} />                
            </Route>

        </Routes>
    )
}

export default MainRoutes;