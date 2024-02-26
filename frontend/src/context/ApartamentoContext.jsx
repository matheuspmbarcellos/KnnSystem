import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "./NavigateContext";

export const ApartamentoContext = createContext();

export const useApartamento = () => useContext(ApartamentoContext);

export const ApartamentoProvider = ({ children}) => {
    const [apartamentoStore, setApartamentoStore] = useState([]);
    const [apartamentoDetail, setApartamentoDetail] = useState([])
    const [apartamentoRelatorio, setApartamentoRelatorio] = useState([])
    const [error, setError] = useState(null);
    const navigate = useNavigation()

    const gerarRelatorioApartamento = async () => {
        try {
            const response = await api.get("/relatorio/api/apartamentos");
            setApartamentoRelatorio(response.data);
            navigate("/RelatorioApt")            
        } catch (error) {
            navigate("/RelatorioApt")
        }
    }

    const buscarParams = async (input) => {
        const params = {};
        if (input.numero) {params.numero = input.numero} else {params.numero = null};
        if (input.bloco) {params.bloco = input.bloco} else {params.bloco = null};
        
        try {
            const response = await api.get('/apartamento/api/consulta', { params });
            setApartamentoStore(response.data);
            setError(null);
            navigate("/ResultadoApartamento")
        } catch (error) {
            if (error.response) {
                setError(error.response.data.mensagem);
            } else if (error.request) {
                setError("Erro ao fazer a requisição para o servidor.");
            } else {
                setError("Ocorreu um erro ao processar sua solicitação.");
            }
        }
    }

    const inativarApartamento = async (id) => {
        try {
            await api.put(`/apartamento/api/inativa/${id}`)
            buscarParams({numero: apartamentoDetail.morador.numeroDoApartamento})
            alert("Apartamento inativo!")
        } catch (error) {
            alert("Erro ao inativar apartamento")
        }
    }

    const ativarApartamento = async (id) => {
        try {
            await api.put(`/apartamento/api/ativa/${id}`)
            buscarParams({numero: apartamentoDetail.morador.numeroDoApartamento})
            alert("Apartamento ativo!")
        } catch (error) {
            alert("Função indisponível!")
        }
    }
    
    const excluirApartamento = async (id) => {
        try {
            await api.delete(`/apartamento/api/exclui/${id}`)
            buscarParams([])
            alert("Apartamento excluído!")
        } catch (error) {
            alert("Erro ao excluir apartamento")
        }
    }

    const atualizarApartamento = async (id, apartamentoAtualizado) => {
        try {
            await api.put(`/apartamento/api/atualiza/${id}`, apartamentoAtualizado);
            buscarParams({numero: apartamentoDetail.morador.numeroDoApartamento})
            alert("Apartamento atualizado!")
        } catch (error) {
            alert(error.response.mensagem)
        }
    }
    
    return (
        <ApartamentoContext.Provider
            value={{
                apartamentoStore,
                apartamentoDetail,
                apartamentoRelatorio,
                error,
                setApartamentoDetail,
                buscarParams,
                gerarRelatorioApartamento,
                setError,
                inativarApartamento,
                ativarApartamento,
                excluirApartamento,
                atualizarApartamento,
            }}
        >
            {children}
        </ApartamentoContext.Provider>
    )
}