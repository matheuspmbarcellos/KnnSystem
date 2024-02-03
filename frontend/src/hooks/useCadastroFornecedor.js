import { useMutation } from 'react-query'
import { api } from "../services/api"


const postFornecedor = async (data) => {    
    const response = JSON.stringify(data.data);    
    return await api.post('/fornecedor/api/cadastra', response)
}

export function useCadastroFornecedor() {
    const mutate = useMutation({
        mutationFn: postFornecedor,
    })
    return mutate;
}