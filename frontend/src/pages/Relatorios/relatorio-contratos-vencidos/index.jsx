import { RelatoriosContainer, Resultado } from "../styles"
import Button from "../../../components/Button/Button";
import { usePDF, Margin } from 'react-to-pdf';
import { useNavigation } from "../../../context/NavigateContext";
import { useContrato } from "../../../context/ContratoContext";

const RelatorioContratosVigentes = () => {
    const navigate = useNavigation()
    const { relatorioContratoVencido } = useContrato();
    const { toPDF, targetRef } = usePDF({
        method: "open",
        filename: 'relatorio_apto.pdf',
        page: { 
            format: 'A4',
            orientation: 'landscape',
            margin: Margin.MEDIUM 
        }
    });
    

  return (
    <RelatoriosContainer>
        <center className="conteudo" ref={targetRef}>
            <h1>Relatório - Contratos Vigentes</h1> 
            <Resultado>
            <thead>
            <tr>
            <th>Número do Contrato</th>
            <th>Código do Fornecedor</th>
            <th>Vigência Inicial</th>
            <th>Vigência Final</th>
            <th>Valor Mensal Atual</th>
            <th>Valor Mensal Inicial</th>
            <th>Objeto Contratual</th>
            <th>Nome do Gestor</th>
            <th>CPF do Gestor</th>
            <th>E-mail do Gestor</th>
            <th>E-mail do Síndico</th>
            <th>Percentual Multa</th>
            </tr>
            </thead>
            <tbody>
            {relatorioContratoVencido?.map((contrato, index) => (
                <tr key={index}>
                    <td>{contrato.numeroContrato}</td>
                    <td>{contrato.numeroControleFornecedor}</td>
                    <td>{contrato.vigenciaInicial}</td>
                    <td>{contrato.vigenciaFinal}</td>
                    <td>{contrato.valorMensalAtual}</td>
                    <td>{contrato.valorMensalInicial}</td>
                    <td>{contrato.objetoContratual}</td>
                    <td>{contrato.gestor.nome}</td>
                    <td>{contrato.gestor.cpf}</td>
                    <td>{contrato.gestor.email}</td>
                    <td>{contrato.emailSindico}</td>
                    <td>{contrato.percentualMulta}</td>
                </tr>
            ))}       
            </tbody>
        </Resultado>
        </center>
        <div className="buttons">
            <Button onClick={() => navigate(-1)}>Voltar</Button>
            <Button onClick={() => toPDF()}>Salvar</Button>
        </div>
    </RelatoriosContainer>
  )
}

export default RelatorioContratosVigentes;