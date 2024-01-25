import { ApartamentosContainer, InputContainer } from "./styles";
import MenuCRUD
 from "../../components/MenuCRUD";
const Apartamentos = () => {

  return (
    <ApartamentosContainer>
        <h1>APARTAMENTOS</h1>
        <MenuCRUD/>
      
        <InputContainer> 
        </InputContainer> 

    </ApartamentosContainer>
  )
}


MenuCRUD.defaultProps = {
  menuArr: [
      {
          acao: "BUSCAR",
          link: "./BuscarApartamentos",
      },
      {
        acao: "CADASTRAR",
        link: "./CadastrarApartamentos",
    },
    {
      acao: "ALTERAR",
      link: "./AlterarApartamentos",
  },
  {
    acao: "INATIVAR",
    link: "./InativarApartamentos",
},
  ],
};

export default Apartamentos;