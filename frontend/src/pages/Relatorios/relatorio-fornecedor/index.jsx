import { RelatoriosContainer, Resultado } from "../styles"
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { usePDF, Margin } from 'react-to-pdf';

const RelatorioFornecedores = () => {
    const navigate = useNavigate()
    const { toPDF, targetRef } = usePDF({
        method: "save",
        filename: 'relatorio_apto.pdf',
        page: { margin: Margin.SMALL }
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
            <td>101</td>
            <td>60.444.437/0001-46</td>
            <td>Jardim S.A</td>
            <td>Fulano</td>
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