import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "./NavigateContext";

export const FaturaContext = createContext();

export const useFatura = () => useContext(FaturaContext);

export const FaturaProvider = ({ children }) => {
    const [faturaStore, setFaturaStore] = useState([]);
    const [faturaDetail, setFaturaDetail] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigation()

    

    const buscarParams = async (input) => {
        const params = {};
        if (input.cnpjFornecedor) {params.cnpjFornecedor = input.cnpjFornecedor} else {params.cnpjFornecedor = null};
        if (input.razaoSocial) {params.razaoSocial = input.razaoSocial} else {params.razaoSocial = null};
        if (input.numeroContrato) {params.numeroContrato = input.numeroContrato} else {params.numeroContrato = null};
        if (input.numeroFaturaconsulta) {params.numeroFaturaconsulta = input.numeroFaturaconsulta} else {params.numeroFaturaconsulta = null};

        try {
            const response = await api.get('/fatura/api/consulta', { params });
            setFaturaStore(response.data);
            setError(null);
            navigate("/ResultadoFatura")
        } catch (error) {
            setError('Nenhum Fatura encontrado. Tente novamente.');
        }
    }

    const inativarFatura = async (id) => {
        try {
            await api.put(`/fatura/api/inativa/${id}`)
            buscarParams([])
            alert("Fatura inativo!")
        } catch (error) {
            alert("Erro ao inativar fatura")
        }
    }


    return (
        <FaturaContext.Provider value={{
            faturaStore,
            faturaDetail,
            error,
            buscarParams,
            setFaturaDetail,
            setError,
            inativarFatura,
        }}>
            {children}
        </FaturaContext.Provider>
    )
}