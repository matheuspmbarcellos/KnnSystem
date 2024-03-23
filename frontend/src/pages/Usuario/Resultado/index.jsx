import { ResultadoContainer, Resultado, DetailButton,
   EditButton, 
   ActivateButton,
   DeleteButton,
   InactivateButton} from "../../../components/PagesStyles/resultado";
import Button from "../../../components/Button/Button";
import { useUsuario } from "../../../context/UsuarioContext";
import { useNavigation } from "../../../context/NavigateContext";

const ResultadoUsuario = () => {
  const { usuarioStore, setUsuarioDetail } = useUsuario();
  const navigate = useNavigation()

  const handleExibirDetail = (usuario) => {
    setUsuarioDetail(usuario)
    navigate("/DetalharUsuario");
  };

  const handleEditar = (usuario) => {
    setUsuarioDetail(usuario)
    navigate("/AlterarUsuario");
  };
  const handleAlterarStatus = (usuario) => {
    setUsuarioDetail(usuario)
    navigate("/AlterarStatusUsuario");
  };
  const handleExcluir = (usuario) => {
    setUsuarioDetail(usuario)
    navigate("/ExcluirUsuario");
  };


  return (
    <ResultadoContainer>
      <h2 className="resultado">Resultado</h2>
      <Resultado>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Cargo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody> 
          {(usuarioStore && usuarioStore.length > 0) ? (
            usuarioStore
            .sort((a, b) => {
              const statusComparison = a.status.localeCompare(b.status);
              if (statusComparison !== 0) {
                return statusComparison;
              }
              return a.nome.localeCompare(b.nome);
            })
            .map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.nome}<span className={`${usuario.status}`}> {usuario.status}</span></td>
                <td>{usuario.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,'$1.$2.$3-$4')}</td>
                <td>{usuario.cargo}</td>
                <td>
                    <DetailButton onClick={() => handleExibirDetail(usuario)} title="Detalhar" />
                    <EditButton onClick={() => handleEditar(usuario)} title="Editar" />
                    <DeleteButton onClick={() => handleExcluir(usuario)} title="Excluir"/>
                    {(usuario.status === "ATIVO") && <ActivateButton onClick={() => handleAlterarStatus(usuario)} title="Inativar"/>}
                    {(usuario.status === "INATIVO") && <InactivateButton onClick={() => handleAlterarStatus(usuario)} title="Ativar"/>}
                </td>
              </tr>
            ))
            ) : (
              <tr>
                <td colSpan="4">Nenhum usuário encontrado</td>
              </tr>
            )}
        </tbody>
      </Resultado>
      <Button onClick={() => navigate("/BuscarUsuario")}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoUsuario;