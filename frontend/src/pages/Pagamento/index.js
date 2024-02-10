import { PagamentoContainer, menuPagamento } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";

const Pagamento = () => {
  return (
    <PagamentoContainer>
      <MenuCRUD
      titulo = "PAGAMENTO"
      menuArr = {menuPagamento}
      />
    </PagamentoContainer>
  )
}


export default Pagamento;