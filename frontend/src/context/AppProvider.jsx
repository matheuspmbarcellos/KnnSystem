import { ApartamentoProvider } from "./ApartamentoContext"
import { AuthProvider } from "./AuthContext"
import { ContratoProvider } from "./ContratoContext"
import { ExtratoProvider } from "./ExtratoContext"
import { FornecedorProvider } from "./FornecedorContext"
import { NavigationProvider } from "./NavigateContext"
import { FaturaProvider } from "./FaturaContext"
import { UsuarioProvider } from "./UsuarioContext"

export const AppProvider = ({children}) => {

    return (
        <>
        <AuthProvider>
            <NavigationProvider>
                <UsuarioProvider>
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
                </UsuarioProvider>  
            </NavigationProvider>
        </AuthProvider>
        </>
    )
}