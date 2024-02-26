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

    const gerarRelatorioFornecedor = async () => {
        try {
            const response = await api.get("/relatorio/api/fornecedores-ativos");
            setFornecedorRelatorio(response.data);
            navigate("/RelatorioFornecedores")            
        } catch (error) {
            navigate("/RelatorioFornecedores")
        }
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

    const inativarFornecedor = async (id) => {
        try {
            await api.put(`/fornecedor/api/inativa/${id}`)
            buscarParams({cnpj: fornecedorDetail.cnpj})
            alert("Fornecedor inativo!")
        } catch (error) {
            alert("Erro ao inativar fornecedor")
        }
    }

    const ativarFornecedor = async (id) => {
        try {
            await api.put(`/fornecedor/api/ativa/${id}`)
            buscarParams({cnpj: fornecedorDetail.cnpj})
            alert("Fornecedor ativo!")
        } catch (error) {
            alert("Erro ao ativar fornecedor")
        }
    }
    
    const exluirFornecedor = async (id) => {
        try {
            await api.delete(`/fornecedor/api/exclui/${id}`)
            buscarParams([])
            alert("Fornecedor excluído!")
        } catch (error) {
            alert("Erro ao excluir fornecedor")
        }
    }

    const atualizarFornecedor = async (id, fornecedorAtualizado) => {
        try {
            await api.put(`/fornecedor/api/atualiza/${id}`, fornecedorAtualizado);
            buscarParams({cnpj: fornecedorDetail.cnpj})
            alert("Fornecedor atualizado!")
        } catch (error) {
            alert(error.response.mensagem)
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
                gerarRelatorioFornecedor,
                setError,
                inativarFornecedor,
                ativarFornecedor,
                exluirFornecedor,
                atualizarFornecedor,
            }}
        >
            {children}
        </FornecedorContext.Provider>
    )
}