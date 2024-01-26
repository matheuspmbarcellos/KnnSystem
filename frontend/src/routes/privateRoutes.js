import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export const PrivateRoutes = () => {
    const {signed} = useContext(AuthContext)

    return signed ? <Outlet /> : <Navigate to="/Login" />
}