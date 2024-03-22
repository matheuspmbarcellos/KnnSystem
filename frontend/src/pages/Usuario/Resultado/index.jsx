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
              <tr>
                <td>{usuarioStore.nome}<span className={`${usuarioStore.status}`}> {usuarioStore.status}</span></td>
                <td>{usuarioStore.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,'$1.$2.$3-$4')}</td>
                <td>{usuarioStore.cargo}</td>
                <td>
                    <DetailButton onClick={() => handleExibirDetail(usuarioStore)} title="Detalhar" />
                    <EditButton onClick={() => handleEditar(usuarioStore)} title="Editar" />
                    <DeleteButton onClick={() => handleExcluir(usuarioStore)} title="Excluir"/>
                    {(usuarioStore.status === "ATIVO") && <ActivateButton onClick={() => handleAlterarStatus(usuarioStore)} title="Inativar"/>}
                    {(usuarioStore.status === "INATIVO") && <InactivateButton onClick={() => handleAlterarStatus(usuarioStore)} title="Ativar"/>}
                </td>
              </tr>
        </tbody>
      </Resultado>
      <Button onClick={() => navigate("/BuscarUsuario")}>Voltar</Button>
    </ResultadoContainer>
  )
}

export default ResultadoUsuario;