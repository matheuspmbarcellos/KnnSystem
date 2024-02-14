import { ApartamentoProvider } from "./ApartamentoContext"
import { AuthProvider } from "./AuthContext"
import { FornecedorProvider } from "./FornecedorContext"

export const AppProvider = ({children}) => {

    return (
        <>
        <AuthProvider>
            <FornecedorProvider>
                <ApartamentoProvider>
                    {children}
                </ApartamentoProvider>
            </FornecedorProvider>
        </AuthProvider>
        </>
    )
}