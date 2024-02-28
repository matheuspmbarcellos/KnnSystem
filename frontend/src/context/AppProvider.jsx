import { ApartamentoProvider } from "./ApartamentoContext"
import { AuthProvider } from "./AuthContext"
import { ContratoProvider } from "./ContratoContext"
import { ExtratoProvider } from "./ExtratoContext"
import { FornecedorProvider } from "./FornecedorContext"
import { NavigationProvider } from "./NavigateContext"
import { FaturaProvider } from "./FaturaContext"

export const AppProvider = ({children}) => {

    return (
        <>
        <AuthProvider>
            <NavigationProvider>
                <FornecedorProvider>
                    <ApartamentoProvider>
                        <FaturaProvider>
                            <ExtratoProvider>
                                <ContratoProvider>
                                {children}
                                </ContratoProvider>
                            </ExtratoProvider>
                        </FaturaProvider>                        
                    </ApartamentoProvider>
                </FornecedorProvider>
            </NavigationProvider>
        </AuthProvider>
        </>
    )
}