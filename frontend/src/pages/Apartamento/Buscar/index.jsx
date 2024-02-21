import { PageContainer, InputContainer} from "../../../components/PagesStyles/buscar";
import MenuApartamentos from "../../../components/MenuCRUD/MenuApartamentos";
import Button from "../../../components/Button/Button";
import { useContext, useState } from "react";
import { ApartamentoContext } from "../../../context/ApartamentoContext";

const BuscarApartamento = () => {
  const [numero, setNumero] = useState('');
  const [bloco, setBloco] = useState('');
  const { buscarParams, error, setError } = useContext(ApartamentoContext)

  const handleExibirResultado = (e) => {
      e.preventDefault();
      const input = {
        numero,
        bloco,
      };
      buscarParams(input);
  };

  return (
    <PageContainer>
        <h1>APARTAMENTOS</h1>
        <MenuApartamentos/>
        <form onSubmit={handleExibirResultado}>
        <InputContainer> 
          <input type='text' placeholder='Número' value={numero} onChange={(e) => setNumero(e.target.value)} onFocus={() => setError(null)} />
          <input type='text' placeholder='Bloco' value={bloco} onChange={(e) => setBloco(e.target.value)} onFocus={() => setError(null)} />        
          <Button type="submit">Exibir</Button>
          {error && <p>{error}</p>}
        </InputContainer>
        </form>
        
    </PageContainer>
  )
}

export default BuscarApartamento;