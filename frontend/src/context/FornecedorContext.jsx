import { createContext, useState } from "react";
import { api } from "../services/api";

export const FornecedorContext = createContext();

export const FornecedorProvider = ({ children}) => {
    const [fornecedorStore, setFornecedorStore] = useState([]);
    const [fornecedorDetail, setFornecedorDetail] = useState([])

    const buscarParams = async (input) => {
        const params = {};
        if (input.cnpj) {params.cnpj = input.cnpj} else {params.cnpj = null};
        if (input.razaoSocial) {params.razaoSocial = input.razaoSocial} else {params.razaoSocial = null};
        if (input.numeroContrato) {params.numeroContrato = input.numeroContrato} else {params.numeroContrato = null};

        try {
            const response = await api.get('/fornecedor/api/consulta', { params });
            setFornecedorStore(response.data);
            // console.log(response.data);
            // console.log(fornecedorStore);
        } catch (error) {
            alert('Error fetching data:', error);
        }
    }
    
    return (
        <FornecedorContext.Provider
            value={{
                fornecedorStore,
                fornecedorDetail,
                setFornecedorDetail,
                buscarParams,
            }}
        >
            {children}
        </FornecedorContext.Provider>
    )
}