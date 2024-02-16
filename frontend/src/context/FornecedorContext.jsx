import { createContext, useState } from "react";
import { api } from "../services/api";

export const FornecedorContext = createContext();

export const FornecedorProvider = ({ children}) => {
    const [fornecedorStore, setFornecedorStore] = useState([]);
    const [fornecedorDetail, setFornecedorDetail] = useState([]);
    const [fornecedorRelatorio, setFornecedorRelatorio] = useState([])
    const [error, setError] = useState(null);

    const buscarRelatorio = async () => {
        const response = await api.get("/relatorio/api/fornecedores-ativos");
        setFornecedorRelatorio(response.data);
    }

    const buscarParams = async (input) => {
        const params = {};
        if (input.cnpj) {params.cnpj = input.cnpj} else {params.cnpj = null};
        if (input.razaoSocial) {params.razaoSocial = input.razaoSocial} else {params.razaoSocial = null};
        if (input.numeroContrato) {params.numeroContrato = input.numeroContrato} else {params.numeroContrato = null};

        try {
            const response = await api.get('/fornecedor/api/consulta', { params });
            setFornecedorStore(response.data);
            setError(null);
        } catch (error) {
            setError('Nenhum fornecedor encontrado. Tente novamente.');
        }
    }
    
    return (
        <FornecedorContext.Provider
            value={{
                fornecedorStore,
                fornecedorDetail,
                fornecedorRelatorio,
                error,
                setFornecedorDetail,
                buscarParams,
                buscarRelatorio,
                setError,
            }}
        >
            {children}
        </FornecedorContext.Provider>
    )
}