import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "./NavigateContext";

export const FornecedorContext = createContext();

export const useFornecedor = () => useContext(FornecedorContext);

export const FornecedorProvider = ({ children}) => {
    const [fornecedorStore, setFornecedorStore] = useState([]);
    const [fornecedorDetail, setFornecedorDetail] = useState([]);
    const [fornecedorRelatorio, setFornecedorRelatorio] = useState([])
    const [error, setError] = useState(null);
    const navigate = useNavigation()

    const buscarRelatorio = async () => {
        const response = await api.get("/relatorio/api/fornecedores-ativos");
        setFornecedorRelatorio(response.data);
    }

    const buscarParams = async (input) => {
        const params = {};
        if (input.cnpj) {params.cnpj = input.cnpj} else {params.cnpj = null};
        if (input.razaoSocial) {params.razaoSocial = input.razaoSocial} else {params.razaoSocial = null};
        if (input.numeroControle) {params.numeroControle = input.numeroControle} else {params.numeroControle = null};

        try {
            const response = await api.get('/fornecedor/api/consulta', { params });
            setFornecedorStore(response.data);
            setError(null);
            navigate("/ResultadoFornecedor")
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