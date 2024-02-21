import { ApartamentoProvider } from "./ApartamentoContext"
import { AuthProvider } from "./AuthContext"
import { ExtratoProvider } from "./ExtratoContext"
import { FornecedorProvider } from "./FornecedorContext"
import { NavigationProvider } from "./NavigateContext"
import { PagamentoProvider } from "./PagamentoContext"

export const AppProvider = ({children}) => {

    return (
        <>
        <AuthProvider>
            <NavigationProvider>
                <FornecedorProvider>
                    <ApartamentoProvider>
                        <PagamentoProvider>
                            <ExtratoProvider>
                            {children}
                            </ExtratoProvider>
                        </PagamentoProvider>                        
                    </ApartamentoProvider>
                </FornecedorProvider>
            </NavigationProvider>
        </AuthProvider>
        </>
    )
}