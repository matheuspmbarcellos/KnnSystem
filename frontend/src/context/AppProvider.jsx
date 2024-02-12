import { AuthProvider } from "./AuthContext"
import { FornecedorProvider } from "./FornecedorContext"

export const AppProvider = ({children}) => {

    return (
        <>
        <AuthProvider>
            <FornecedorProvider>
                {children}
            </FornecedorProvider>
        </AuthProvider>
        </>
    )
}