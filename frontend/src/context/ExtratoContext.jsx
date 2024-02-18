import { createContext, useState } from "react";
import { api } from "../services/api";

export const ExtratoContext = createContext();

export const ExtratoProvider = ({ children}) => {
    const [ extrato, setExtrato ] = useState("")
    const [ erroBusca, setErroBusca ] = useState(null)


    const loadExtrato = async (params) => {
        setExtrato("")
        try {
            const response = await api.get('/extrato/api/consulta', { params });
            setExtrato(response.data);
            setErroBusca(null)
            
        } catch (error) {
            setErroBusca('Não há valores para o período selecionado')
        }
    }

    
    
    return (
        <ExtratoContext.Provider
            value={{
                extrato,
                erroBusca,
                loadExtrato,                
            }}
        >
            {children}
        </ExtratoContext.Provider>
    )
}