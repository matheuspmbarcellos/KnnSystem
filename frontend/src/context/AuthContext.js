import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const LoadingStoreData = async () => {
            const storageUser = localStorage.getItem("@Auth:user")
            const storageToken = localStorage.getItem("@Auth:token")

            if (storageUser && storageToken) {
                setUser(storageUser)
            }
        }
        LoadingStoreData();
    }, []);

    

    const signIn = async (login, password) => {
        const response = await api.post('/auth/api/login', {
            login,
            password,
        })

        if (response.data.error) {
            alert(response.data.error)
        } else {
            setUser(response.data.user);
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`
            localStorage.setItem("@Auth:token", response.data.token);
            localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
        }  
    }

    const signOut = () => {
        localStorage.clear();
        setUser(null);
        return <Navigate to="/" />
    }

    return (
        <AuthContext.Provider 
            value={{
                user,
                signed: !!user,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}