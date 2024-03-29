import { RelatoriosContainer, Resultado } from "../styles";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { usePDF, Margin } from 'react-to-pdf';
import { useApartamento } from "../../../context/ApartamentoContext";

const RelatorioApt = () => {
    const { apartamentoRelatorio } = useApartamento();
    const navigate = useNavigate();
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
            <h1>Relatório - Apartamentos</h1> 
            <Resultado>
            <thead>
                <tr>
                    <th>Apt.</th>
                    <th>Bloco</th>
                    <th>Nome do proprietário</th>
                    <th>Telefone do proprietário</th>
                    <th>CPF do proprietário</th>
                    <th>E-mail do proprietário</th>
                    <th>Nome do morador</th>
                    <th>Telefone do morador</th>
                    <th>CPF do morador</th>
                    <th>E-mail do morador</th>
                    <th>Metragem do imóvel m²</th>
                </tr>
            </thead>
            <tbody>
            {(apartamentoRelatorio && apartamentoRelatorio.length > 0) ? (
                apartamentoRelatorio
                .map((apartamento, index) => (
                <tr key={index}>
                    <td>{apartamento.morador.numeroDoApartamento}</td>
                    <td>{apartamento.morador.blocoDoApartamento}</td>
                    <td>{apartamento.proprietario.nome}</td>
                    <td>{apartamento.proprietario.telefone}</td>
                    <td>{apartamento.proprietario.cpf}</td>
                    <td>{apartamento.proprietario.email}</td>
                    <td>{apartamento.morador.nome}</td>
                    <td>{apartamento.morador.telefone}</td>
                    <td>{apartamento.morador.cpf}</td>
                    <td>{apartamento.morador.email}</td>
                    <td>{apartamento.metragemDoImovel}</td>
                </tr>
            ))): (
                <tr>
                  <td colSpan="11">Nenhum Apartamento encontrado</td>
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

export default RelatorioApt;