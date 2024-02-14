// import { Link } from "react-router-dom";
import { PageContainer, InputContainer} from "../../../components/PagesStyles/buscar";
import MenuApartamentos from "../../../components/MenuCRUD/MenuApartamentos";
import Button from "../../../components/Button/Button";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApartamentoContext } from "../../../context/ApartamentoContext";

const BuscarApartamento = () => {
  const [numero, setNumero] = useState('');
  const [bloco, setBloco] = useState('');
  const { buscarParams } = useContext(ApartamentoContext)
  const navigate = useNavigate();

  const handleExibirResultado = (e) => {
      e.preventDefault();
      const input = {
        numero,
        bloco,
      };
      
      buscarParams(input);
      navigate("/ResultadoApartamento");
      
  };

  return (
    <PageContainer>
        <h1>APARTAMENTOS</h1>
        <MenuApartamentos/>
        <form onSubmit={handleExibirResultado}>
        <InputContainer> 
          <input type='text' placeholder='Número' value={numero} onChange={(e) => setNumero(e.target.value)}/>
          <input type='text' placeholder='Bloco' value={bloco} onChange={(e) => setBloco(e.target.value)}/>        
            <Button type="submit">Exibir</Button>
        </InputContainer>
        </form>
        
    </PageContainer>
  )
}

export default BuscarApartamento;