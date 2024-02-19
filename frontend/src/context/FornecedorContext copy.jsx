import { createContext, useState } from "react";

export const FornecedorContext = createContext();

export const FornecedorProvider = ({ children}) => {
    const [fornecedorDetail, setFornecedorDetail] = useState([])
    const [fornecedorStore, setFornecedorStore] = useState([
        {
            "id": 4,
            "razaoSocial": "Razão Social EIRELI",
            "cnpj": "30126955000150",
            "Vigência inicial": "04/10/2023",
            "Vigência final": "04/10/25",
            "Serviço/Produto": "Jardinagem",
            "Status": "Ativo",
        },
        {
            "id": 5,
            "razaoSocial": "Fornecedor Y LTDA",
            "cnpj": "48577985000149",
            "Vigência inicial": "04/10/2023",
            "Vigência final": "04/10/25",
            "Serviço/Produto": "Jardinagem",
            "Status": "Ativo",
        },
        {
            "id": 6,
            "razaoSocial": "Intex Consultoria Imobiliaria LTDA",
            "cnpj": "31064477000164",
            "Vigência inicial": "04/10/2023",
            "Vigência final": "04/10/25",
            "Serviço/Produto": "Consultoria",
            "Status": "Ativo",
        }
    ]);

    
    return (
        <FornecedorContext.Provider
            value={{
                fornecedorStore,
                fornecedorDetail,
                setFornecedorStore,
                setFornecedorDetail,
            }}
        >
            {children}
        </FornecedorContext.Provider>
    )
}