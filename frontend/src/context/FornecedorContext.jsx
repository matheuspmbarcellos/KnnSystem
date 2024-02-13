import { createContext, useState } from "react";

export const FornecedorContext = createContext();

export const FornecedorProvider = ({ children}) => {
    const [fornecedorDetail, setFornecedorDetail] = useState([])
    const [fornecedorStore, setFornecedorStore] = useState([
        {
            "id": 4,
            "razaoSocial": "Razão Social EIRELI",
            "cnpj": "30126955000150",
            "domicilioBancario": {
                "agencia": "1234",
                "contaCorrente": "4321",
                "banco": "001",
                "pix": "407c1a87-d76c-4ae1-945b-0d1e91a68a93"
            },
            "responsavel": {
                "cpf": "41790617081",
                "nome": "Responsável A do Fornecedor A",
                "email": "responsavela@knnsystem.com.br",
                "telefone": "61123456789"
            },
            "enderecoCompleto": "Endereço do Fornecedor A",
            "naturezaDoServico": "Natureza do Fornecedor A",
            "emailCorporativo": "razaosocialeireli@rzeireli.com.br",
            "numeroControle": "7457841631"
        },
        {
            "id": 5,
            "razaoSocial": "Fornecedor Y LTDA",
            "cnpj": "48577985000149",
            "domicilioBancario": {
                "agencia": "1245",
                "contaCorrente": "6789",
                "banco": "237",
                "pix": "407c1a87-d78c-4ae1-945b-2d1e91b68a93"
            },
            "responsavel": {
                "cpf": "49834649053",
                "nome": "Joao Garcia",
                "email": "responsavel@fornecedory.com.br",
                "telefone": "21973628790"
            },
            "enderecoCompleto": "Rua dos Goytacases 233",
            "naturezaDoServico": "Jardinagem",
            "emailCorporativo": "comercial@fornecedory.com.br",
            "numeroControle": "4321728483"
        },
        {
            "id": 6,
            "razaoSocial": "Intex Consultoria Imobiliaria LTDA",
            "cnpj": "31064477000164",
            "domicilioBancario": {
                "agencia": "0720",
                "contaCorrente": "5467923",
                "banco": "001",
                "pix": "310647749000164"
            },
            "responsavel": {
                "cpf": "96562568080",
                "nome": "Leonardo Marques",
                "email": "leonardo@inteximoveis.com",
                "telefone": "21988850571"
            },
            "enderecoCompleto": "Avenida Sete de Setembro 317 sala 504",
            "naturezaDoServico": "Consultoria",
            "emailCorporativo": "comercial@inteximoveis.com",
            "numeroControle": "2330488026"
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