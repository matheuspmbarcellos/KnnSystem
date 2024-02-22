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
            alert(error.response.mensagem)
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
            setError('Nenhum apartamento encontrado. Tente novamente.');
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
            }}
        >
            {children}
        </ApartamentoContext.Provider>
    )
}