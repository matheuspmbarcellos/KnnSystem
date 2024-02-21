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
        const response = await api.get("/relatorio/api/contratos-vigentes");
        setRelatorioContratoVigente(response.data);
    }
    const gerarRelatorioContratosVencidos = async () => {
        const response = await api.get("/relatorio/api/contratos-vencidos");
        setRelatorioContratoVencido(response.data);
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
            }}
        >
            {children}
        </ContratoContext.Provider>
    )
}