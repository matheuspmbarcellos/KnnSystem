import { RelatoriosContainer, Resultado } from "../styles"
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { usePDF, Margin } from 'react-to-pdf';
import { useContext, useEffect } from "react";
import { FornecedorContext } from "../../../context/FornecedorContext";

const RelatorioFornecedores = () => {
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
    const { fornecedorRelatorio, buscarRelatorio } = useContext(FornecedorContext);

    useEffect(() => {
        buscarRelatorio()
    },[buscarRelatorio])
    

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
            {fornecedorRelatorio?.map((fornecedor, index) => (
                <tr key={index}>
                    <td>{fornecedor.numeroControle}</td>
                    <td>{fornecedor.cnpj}</td>
                    <td>{fornecedor.razaoSocial}</td>
                    <td>{fornecedor.responsavel.nome}</td>
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

export default RelatorioFornecedores;