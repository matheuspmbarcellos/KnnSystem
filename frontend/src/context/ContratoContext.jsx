import { createContext, useState } from "react";

export const ContratoContext = createContext();

export const ContratoProvider = ({ children}) => {
    const [contratoDetail, setContratoDetail] = useState([])
    const [contratoStore, setContratoStore] = useState([
        {
            "id": 4,
            "razaoSocial": "Razão Social EIRELI",
            "cnpj": "30126955000150",
            "vigenciaI": "04/10/2023",
            "vigenciaF": "04/10/2025",
            "servico": "Jardinagem",
            "status": "Ativo",
        },
        {
            "id": 5,
            "razaoSocial": "Fornecedor Y LTDA",
            "cnpj": "48577985000149",
            "vigenciaI": "01/10/2024",
            "vigenciaF": "01/10/2025",
            "servico": "Fornecedor",
            "Status": "Ativo",
        },
        {
            "id": 6,
            "razaoSocial": "Intex Consultoria Imobiliaria LTDA",
            "cnpj": "31064477000164",
            "vigenciaI": "11/02/2024",
            "vigenciaF": "11/02/2030",
            "servico": "Consultoria",
            "Status": "Ativo",
        }
    ]);

    
    return (
        < ContratoContext.Provider
            value={{
                contratoStore,
                contratoDetail,
                setContratoStore,
                setContratoDetail,
            }}
        >
            {children}
        </ContratoContext.Provider>
    )
}