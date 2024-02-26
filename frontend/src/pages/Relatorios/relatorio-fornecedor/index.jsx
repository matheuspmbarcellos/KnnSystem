import { RelatoriosContainer, Resultado } from "../styles"
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { usePDF, Margin } from 'react-to-pdf';
import { useFornecedor } from "../../../context/FornecedorContext";

const RelatorioFornecedores = () => {
    const { fornecedorRelatorio } = useFornecedor();
    const navigate = useNavigate()
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
            <h1>Relatório - Fornecedores</h1> 
            <Resultado>
            <thead>
            <tr>
            <th>Número de cadastro</th>
            <th>CNPJ</th>
            <th>Razão social</th>
            <th>Nome do responsável</th>
            </tr>
            </thead>
            <tbody>
            {(fornecedorRelatorio && fornecedorRelatorio.length > 0) ? (
                fornecedorRelatorio
                .map((fornecedor, index) => (
                <tr key={index}>
                    <td>{fornecedor.numeroControle}</td>
                    <td>{fornecedor.cnpj}</td>
                    <td>{fornecedor.razaoSocial}</td>
                    <td>{fornecedor.responsavel.nome}</td>
                </tr>
            ))) : (
                <tr>
                  <td colSpan="4">Nenhum Fornecedor encontrado</td>
                </tr>
              )}       
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

export default RelatorioFornecedores;