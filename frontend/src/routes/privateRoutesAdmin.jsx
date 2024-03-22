import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigation } from "../context/NavigateContext"


export const PrivateRoutesAdmin = () => {
    const {signed, perfil} = useContext(AuthContext)
    const navigate = useNavigation()

    return (signed && perfil === "Administrador") ? <Outlet /> : (navigate("/acessoBloqueado"));
}