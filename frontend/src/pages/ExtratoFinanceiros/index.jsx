import { ExtratosContainer, BuscaContainer, ResultadoExtratoContainer, FormDateContainer } from "./styles";
import Button from "../../components/Button/Button"
import { useContext, useState } from "react";
import { ExtratoContext } from "../../context/ExtratoContext";
import { ListaTransacoes, ResumoTransacoes } from "./model";

const ExtratosFinanceiros = () => {
  const { extrato, erroBusca, loadExtrato } = useContext(ExtratoContext)
  const [mesAnoInicio, setMesAnoInicio] = useState('');
  const [mesAnoFim, setMesAnoFim] = useState('');
  const [anoInicio, setAnoInicio] = useState('');
  const [mesInicio, setMesInicio] = useState('');
  const [anoFim, setAnoFim] = useState('');
  const [mesFim, setMesFim] = useState('');

  const extrairMesAnoInicio = (event) => {
    const valorInputInicio = event.target.value;
    setMesAnoInicio(valorInputInicio);
    const partes = valorInputInicio.split('-');
    setAnoInicio(partes[0])
    setMesInicio(partes[1])
  };
  const extrairMesAnoFim = (event) => {
    const valorInputFim = event.target.value;
    setMesAnoFim(valorInputFim);
    const partes = valorInputFim.split('-');
    setAnoFim(partes[0])
    setMesFim(partes[1])
  };

  const submit = (e) => {
    e.preventDefault();
    const params = {
      mesInicio: mesInicio,
      anoInicio: anoInicio,
      mesFim: mesFim,
      anoFim: anoFim
    }
    loadExtrato(params);
  }

  
  

  return (
    <ExtratosContainer>
      <h1>EXTRATO FINANCEIRO</h1>
        <BuscaContainer onSubmit={submit}>
          <FormDateContainer>
            <label>Mês/Ano de início:</label>            
              <input type="month" name="inicio" value={mesAnoInicio} onChange={extrairMesAnoInicio} required/>            
          </FormDateContainer>
         <FormDateContainer>
           <label>Mês/Ano de fim:</label>           
            <input type="month" name="fim" value={mesAnoFim} onChange={extrairMesAnoFim} required/>           
          </FormDateContainer>
         <Button type="submit">Buscar</Button>
        </BuscaContainer>
        
        {extrato ?
        (<ResultadoExtratoContainer>
          <p>Demonstrativo de Entradas e Saídas</p>
          <ListaTransacoes transacoes={extrato.transacoes} tipo="RECEITA" />
          <ListaTransacoes transacoes={extrato.transacoes} tipo="DESPESA" />
          <ResumoTransacoes resultado={extrato} />
        </ResultadoExtratoContainer>) : null }

        {erroBusca ? <h1>{erroBusca}</h1> : null }



    </ExtratosContainer>
  )
}

export default ExtratosFinanceiros;