import { FornecedoresContainer, menuFornecedores } from "./styles";
import MenuCRUD from "../../components/MenuCRUD";

const Fornecedores = () => {
  return (
    <FornecedoresContainer>
        <MenuCRUD
         titulo= "FORNECEDORES"
         menuArr = {menuFornecedores}/>
            
    </FornecedoresContainer>
  )
}


export default Fornecedores;