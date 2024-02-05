import { ApartamentosContainer, InputContainer } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";
const Apartamentos = () => {

  return (
    <ApartamentosContainer>
        <MenuCRUD/>
      
        <InputContainer> 
        </InputContainer> 

    </ApartamentosContainer>
  )
}


MenuCRUD.defaultProps = {
  titulo: "APARTAMENTOS",
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