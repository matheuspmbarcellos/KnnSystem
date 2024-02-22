import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)
    const [nome, setNome] = useState(null)
    const [perfil, setPerfil] = useState(null)
    

    useEffect(() => {
        const LoadingStoreData = async () => {
            const storageUsuario = sessionStorage.getItem("@Auth:usuario")
            const storageToken = sessionStorage.getItem("@Auth:token")
            const storageNome = sessionStorage.getItem("@Auth:nome")
            const storagePerfil = sessionStorage.getItem("@Auth:perfil")

            if (storageUsuario && storageToken && storageNome && storagePerfil) {
                setUsuario(storageUsuario)
                setNome(storageNome)
                setPerfil(storagePerfil)
            }
        }
        LoadingStoreData();
    }, [usuario]);

    

    const signIn = async (login, password) => {
        const response = await api.post('/auth/api/login', {
            "cpf": login,
            "senha": password,
        })

        if (response.data.error) {
            alert(response.data.error)
        } else {
            setUsuario(response.data);
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`
            sessionStorage.setItem("@Auth:token", response.data.token);
            sessionStorage.setItem("@Auth:nome", response.data.nome);
            sessionStorage.setItem("@Auth:perfil", response.data.perfil);
            sessionStorage.setItem("@Auth:usuario", JSON.stringify(response.data));
        }  
    }

    const signOut = () => {
        sessionStorage.clear();
        setUsuario(null);
        return <Navigate to="/" />
    }

    return (
        <AuthContext.Provider 
            value={{
                usuario,
                nome,
                perfil,
                signed: !!usuario,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}