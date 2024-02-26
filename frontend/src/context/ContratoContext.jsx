import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "./NavigateContext";

export const ContratoContext = createContext();

export const useContrato = () => useContext(ContratoContext);

export const ContratoProvider = ({ children}) => {
    const [contratoStore, setContratoStore] = useState([]);
    const [contratoDetail, setContratoDetail] = useState([]);
    const [relatorioContratoVigente, setRelatorioContratoVigente] = useState([])
    const [relatorioContratoVencido, setRelatorioContratoVencido] = useState([])
    const [error, setError] = useState(null);
    const navigate = useNavigation()

    const gerarRelatorioContratosVigentes = async () => {
        try {
            const response = await api.get("/relatorio/api/contratos-vigentes");
            setRelatorioContratoVigente(response.data);
            navigate("/RelatorioContratosVigentes")
        } catch (error) {
            navigate("/RelatorioContratosVigentes")
        }
    }
    const gerarRelatorioContratosVencidos = async () => {
        try {
            const response = await api.get("/relatorio/api/contratos-vencidos");
            setRelatorioContratoVencido(response.data);
            navigate("/RelatorioContratosVencidos")
        } catch (error) {
            navigate("/RelatorioContratosVencidos")
        }
    }

    const buscarParams = async (input) => {
        const params = {};
        if (input.cnpjFornecedor) {params.cnpjFornecedor = input.cnpjFornecedor} else {params.cnpjFornecedor = null};
        if (input.razaoSocial) {params.razaoSocial = input.razaoSocial} else {params.razaoSocial = null};
        if (input.numeroControle) {params.numeroControle = input.numeroControle} else {params.numeroControle = null};

        try {
            const response = await api.get('/contrato/api/consulta', { params });
            setContratoStore(response.data);
            setError(null);
            navigate("/ResultadoContrato")
        } catch (error) {
            setError('Nenhum Contrato encontrado. Tente novamente.');
        }
    }

    const inativarContrato = async (id) => {
        try {
            await api.put(`/contrato/api/inativa/${id}`)
            buscarParams({cnpjFornecedor: contratoDetail.cnpjFornecedor})
            alert("Contrato inativo!")
        } catch (error) {
            alert("Erro ao inativar contrato")
        }
    }
    const ativarContrato = async (id) => {
        try {
            await api.put(`/contrato/api/ativa/${id}`)
            buscarParams({cnpjFornecedor: contratoDetail.cnpjFornecedor})
            alert("Contrato ativo!")
        } catch (error) {
            alert("Função indisponível!")
        }
    }

    const rescindirContrato = async (id, infos) => {
        try {
            await api.put(`/contrato/api/rescinde/${id}`, infos)
            buscarParams({cnpjFornecedor: contratoDetail.cnpjFornecedor})
            alert("Contrato rescindido!")
        } catch (error) {
            if (error.response) {
                alert(error.response.data.mensagem);
            } else if (error.request) {
                alert("Erro ao fazer a requisição para o servidor.");
            } else {
                alert("Ocorreu um erro ao processar sua solicitação.");
            }
        }
    }
    
    const excluirContrato = async (id) => {
        try {
            await api.delete(`/contrato/api/exclui/${id}`)
            buscarParams([])
            alert("Contrato excluído!")
        } catch (error) {
            alert("Erro ao excluir contrato")
        }
    }

    const reajustarContrato = async (id, infos) => {
        try {
            await api.put(`/contrato/api/reajusta/${id}`, infos)
            buscarParams([])
            alert("Contrato reajustado!")
        } catch (error) {
            if (error.response) {
                alert(error.response.data.mensagem);
              } else if (error.request) {
                  alert("Erro ao fazer a requisição para o servidor.");
              } else {
                  alert("Ocorreu um erro ao processar sua solicitação.");
              }
        }
    }

    const atualizarContrato = async (id, contratoAtualizado) => {
        try {
            await api.put(`/contrato/api/atualiza/${id}`, contratoAtualizado);
            buscarParams({cnpj: contratoDetail.cnpj})
            alert("Contrato atualizado!")
        } catch (error) {
            alert(error.response.mensagem)
        }
    }
    
    return (
        <ContratoContext.Provider
            value={{
                contratoStore,
                contratoDetail,
                relatorioContratoVigente,
                relatorioContratoVencido,
                error,
                setError,
                setContratoDetail,
                buscarParams,
                gerarRelatorioContratosVigentes,
                gerarRelatorioContratosVencidos,
                inativarContrato,
                ativarContrato,
                rescindirContrato,
                excluirContrato,
                reajustarContrato,
                atualizarContrato,
            }}
        >
            {children}
        </ContratoContext.Provider>
    )
}