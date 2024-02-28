import { ResultadoContainer, Resultado, DetailButton, EditButton, ActivateButton, DeleteButton, InactivateButton } from "../../../components/PagesStyles/resultado";
import Button from "../../../components/Button/Button";
import { useFornecedor } from "../../../context/FornecedorContext";
import { useNavigation } from "../../../context/NavigateContext";

const ResultadoFornecedor = () => {  
  const { fornecedorStore, setFornecedorDetail } = useFornecedor()
  const navigate = useNavigation()



  const handleExibirDetail = (fornecedor) => {
    setFornecedorDetail(fornecedor)
    navigate("/DetalharFornecedor");
  };

  const handleEditar = (fornecedor) => {
    setFornecedorDetail(fornecedor)
    navigate("/AlterarFornecedor");
  };
  const handleAlterarStatus = (fornecedor) => {
    setFornecedorDetail(fornecedor)
    navigate("/AlterarStatusFornecedor");
  };
  const handleExcluir = (fornecedor) => {
    setFornecedorDetail(fornecedor)
    navigate("/ExcluirFornecedor");
  };


  return (
    <ResultadoContainer>
      <h2 className="resultado">Resultado</h2>
      <Resultado>
        <thead>
          <tr>
          <th>Razão Social</th>
          <th>CNPJ</th>
          <th>Categoria</th>
          <th>Código</th>
          <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {(fornecedorStore && fornecedorStore.length > 0) ? (
          fornecedorStore
            .sort((a, b) => {
              const statusComparison = a.status.localeCompare(b.status);
              if (statusComparison !== 0) {
                return statusComparison;
              }
              return a.razaoSocial.localeCompare(b.razaoSocial);
            })
            .map((fornecedor, index) => (
              <tr key={index}>
                <td>{fornecedor.razaoSocial}<span className={`${fornecedor.status}`}> {fornecedor.status}</span></td>
                <td>{fornecedor.cnpj.replace(
                        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
                        '$1.$2.$3/$4-$5'
                      )}</td>
                <td>{fornecedor.naturezaDoServico}</td>
                <td>{fornecedor.numeroControle}</td>
                <td>
                  <DetailButton onClick={() => handleExibirDetail(fornecedor)} title="Detalhar" />
                  <EditButton onClick={() => handleEditar(fornecedor)} title="Editar" />
                  <DeleteButton onClick={() => handleExcluir(fornecedor)} title="Excluir"/>
                  {(fornecedor.status === "ATIVO") && <ActivateButton onClick={() => handleAlterarStatus(fornecedor)} title="Desativar"/>}
                  {(fornecedor.status === "INATIVO") && <InactivateButton onClick={() => handleAlterarStatus(fornecedor)} title="Ativar"/>}
                </td>
              </tr>
            ))
        ) : (
          <tr>
            <td colSpan="5">Nenhum fornecedor encontrado</td>
          </tr>
        )}
        </tbody>
      </Resultado>
      <Button onClick={() => navigate("/BuscarFornecedor")}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoFornecedor;