import { CadastrarContainer, CheckboxContainer, BodyContainer, FormContainer } from "./styles";
import Button from "../../../components/Button/Button";
import { useNavigation } from "../../../context/NavigateContext";
import { useContrato } from "../../../context/ContratoContext";
import { useState } from "react";

const ReajustarContrato = () => {
    const { contratoDetail, reajustarContrato} = useContrato()
    const navigate = useNavigation();
    const [ipcaAcumulado, setIpcaAcumulado] = useState(null);
    const [dataReajuste, setDataReajuste] = useState(null);

   
    const handleReajuste = (e) => {
        e.preventDefault();
        
        const infoReajuste = {
            ipcaAcumulado: ipcaAcumulado,
            data: dataReajuste
        }
        reajustarContrato(contratoDetail.id, infoReajuste) 
    };

  return (
    <>
      { contratoDetail ? (
        <CadastrarContainer><br/>
        <h1>{`Contrato [${contratoDetail.numeroContrato}]`}</h1>      
        <BodyContainer>
            <form>
                <CheckboxContainer>
                    <FormContainer>
                        <label> Data de reajuste:</label> 
                        <input type='date' value={dataReajuste} onChange={e => setDataReajuste(e.target.value)} required/>
                    </FormContainer>
                    <FormContainer>
                        <label> Índice IPCA acumulado:</label> 
                        <input type='number' pattern="^\d*(\.\d{0,2})?$" value={ipcaAcumulado} onChange={e => setIpcaAcumulado(e.target.value)} required/>
                    </FormContainer>
                    
                </CheckboxContainer>  
                    
                <FormContainer>
                <center className="bottom">
                    <Button onClick={(e) => e.preventDefault() + navigate(-1)}>Voltar</Button>
                    <Button onClick={handleReajuste} >Reajustar</Button> 
                </center>
                </FormContainer>
            </form>
        </BodyContainer>
        </CadastrarContainer>
      ) : (
        <p>Nenhum Contrato selecionado</p>
        )}
    </>
        
  )
}

export default ReajustarContrato;