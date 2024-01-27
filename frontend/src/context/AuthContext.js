import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        const LoadingStoreData = async () => {
            const storageUsuario = localStorage.getItem("@Auth:usuario")
            const storageToken = localStorage.getItem("@Auth:token")

            if (storageUsuario && storageToken) {
                setUsuario(storageUsuario)
            }
        }
        LoadingStoreData();
    }, []);

    

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
            localStorage.setItem("@Auth:token", response.data.token);
            localStorage.setItem("@Auth:usuario", JSON.stringify(response.data));
        }  
    }

    const signOut = () => {
        localStorage.clear();
        setUsuario(null);
        return <Navigate to="/" />
    }

    return (
        <AuthContext.Provider 
            value={{
                usuario,
                signed: !!usuario,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}