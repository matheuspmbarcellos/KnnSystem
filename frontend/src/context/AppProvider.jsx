
import { FornecedorProvider } from "./FornecedorContext"

export const AppProvider = ({children}) => {

    return (
        <>
            <FornecedorProvider>
                {children}
            </FornecedorProvider>
        </>
    )
}