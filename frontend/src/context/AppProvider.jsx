import { ApartamentoProvider } from "./ApartamentoContext"
import { AuthProvider } from "./AuthContext"
import { ExtratoProvider } from "./ExtratoContext"
import { FornecedorProvider } from "./FornecedorContext"

export const AppProvider = ({children}) => {

    return (
        <>
        <AuthProvider>
            <FornecedorProvider>
                <ApartamentoProvider>
                    <ExtratoProvider>
                        {children}
                    </ExtratoProvider>
                </ApartamentoProvider>
            </FornecedorProvider>
        </AuthProvider>
        </>
    )
}