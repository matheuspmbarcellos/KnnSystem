import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "./NavigateContext";

export const UsuarioContext = createContext();

export const useUsuario = () => useContext(UsuarioContext);

export const UsuarioProvider = ({ children}) => {
    const [usuarioStore, setUsuarioStore] = useState([]);
    const [usuarioDetail, setUsuarioDetail] = useState([])
    const [error, setError] = useState(null);
    const navigate = useNavigation()

    const buscarParams = async (input) => {
        const params = {};
        if (input.cpf) {params.cpf = input.cpf} else {params.cpf = null};

        try {
            const response = await api.get("/usuario/api/consulta", { params })
            setUsuarioStore(response.data);
            navigate("/ResultadoUsuario")
        } catch (error) {
            if (error.response) {
                setError(error.response.data.mensagem);
            } else if (error.request) {
                setError("Erro ao fazer a requisição para o servidor.");
            } else {
                setError("Ocorreu um erro ao processar sua solicitação.");
            }
        }
        
    }

    const inativarUsuario = async (cpf) => {
        try {
            await api.put(`/usuario/api/inativa/${cpf}`)
            buscarParams(usuarioDetail.cpf)
            alert("Usuario inativo!")
        } catch (error) {
            alert("Erro ao inativar Usuario")
        }
    }

    const ativarUsuario = async (cpf) => {
        try {
            await api.put(`/usuario/api/ativa/${cpf}`)
            buscarParams(usuarioDetail.cpf)
            alert("Usuário ativo!")
        } catch (error) {
            alert("Função indisponível!")
        }
    }
    
    const excluirUsuario = async (id) => {
        try {
            await api.delete(`/usuario/api/exclui/${id}`)
            navigate("/BuscarUsuario")
            alert("Usuario excluído!")
        } catch (error) {
            alert("Erro ao excluir Usuario")
        }
    }

    const atualizarUsuario = async (id, usuarioAtualizado) => {
        try {
            await api.put(`/usuario/api/${id}`, usuarioAtualizado);
            buscarParams(usuarioDetail.cpf)
            alert("Usuário atualizado!")
        } catch (error) {
            alert(error.response.mensagem)
        }
    }
    
    return (
        <UsuarioContext.Provider
            value={{
                usuarioStore,
                usuarioDetail,
                error,
                setUsuarioDetail,
                buscarParams,
                setError,
                inativarUsuario,
                ativarUsuario,
                excluirUsuario,
                atualizarUsuario,
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}