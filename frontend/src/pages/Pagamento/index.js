import { PagamentoContainer } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";
const Pagamento = () => {
  return (
    <PagamentoContainer>
      <MenuCRUD/>
    </PagamentoContainer>
  )
}


MenuCRUD.defaultProps = {
  titulo: "PAGAMENTO",
  menuArr: [
      {
          acao: "CONSULTAR",
          link: "./ConsultarFaturas",
          
      },
      {
        acao: "INCLUIR",
        link: "./IncluirFaturas",
    },
    {
      acao: "ALTERAR",
      link: "./AlterarFaturas",
  },
  {
    acao: "INATIVAR",
    link: "./InativarFaturas",
},
  ],
};

export default Pagamento;