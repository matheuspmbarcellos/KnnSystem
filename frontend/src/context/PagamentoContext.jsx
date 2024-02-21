import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "./NavigateContext";

export const PagamentoContext = createContext();

export const usePagamento = () => useContext(PagamentoContext);

export const PagamentoProvider = ({ children }) => {
    const [pagamentoStore, setPagamentoStore] = useState([]);
    const [pagamentoDetail, setPagamentoDetail] = useState([]);
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
            setPagamentoStore(response.data);
            setError(null);
            navigate("/ResultadoPagamento")
        } catch (error) {
            setError('Nenhum Pagamento encontrado. Tente novamente.');
        }
    }


    return (
        <PagamentoContext.Provider value={{
            pagamentoStore,
            pagamentoDetail,
            error,
            buscarParams,
            setPagamentoDetail,
            setError,
        }}>
            {children}
        </PagamentoContext.Provider>
    )
}