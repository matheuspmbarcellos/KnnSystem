import { useMutation } from 'react-query'
import { api } from "../services/api"

const postFornecedor = async (data) => {
    console.log(data.data.razaoSocial)
    return await api.post('/fornecedor/api/cadastra', {
        "razaoSocial": data.data.razaoSocial,
        "cnpj": data.data.cnpj,
        "domicilioBancario": {
            "agencia": data.data.agencia,
            "contaCorrente": data.data.contaCorrente,
            "banco": data.data.banco,
            "pix": data.data.pix
        },
        "responsavel": {
            "nome": data.data.nome,
            "cpf": data.data.cpf,
            "telefone": data.data.telefone,
            "email": data.data.email
        },
        "enderecoCompleto": data.data.enderecoCompleto,
        "naturezaDoServico": data.data.naturezaDoServico,
        "emailCorporativo": data.data.emailCorporativo
    });
}

export function useCadastroFornecedor() {
    const mutate = useMutation({
        mutationFn: postFornecedor,
    })
    return mutate;
}