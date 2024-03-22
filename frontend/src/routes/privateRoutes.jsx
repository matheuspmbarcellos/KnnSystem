import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigation } from "../context/NavigateContext"


export const PrivateRoutes = () => {
    const {signed} = useContext(AuthContext)
    const navigate = useNavigation()

    return signed ? <Outlet /> : navigate("/Login")
}