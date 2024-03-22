import { CadastrarContainer, CheckboxContainer, BodyContainer, FormContainer } from "./styles";
import Button from "../../../components/Button/Button";
import { useNavigation } from "../../../context/NavigateContext";
import { useContrato } from "../../../context/ContratoContext";
import { useState } from "react";

const RescindirContrato = () => {
    const { contratoDetail, rescindirContrato} = useContrato()
    const navigate = useNavigation();
    const [selecionado, setSelecionado] = useState(null);
    const [dataRescisao, setDataRescisao] = useState(null);

    const handleCheckboxChange = (causador) => {
        if (selecionado === causador) {
        setSelecionado(null);
        } else {
        setSelecionado(causador);
        }
    };
    const handleRescisao = (e) => {
        e.preventDefault();
        if(selecionado !== null) {
            const infoRecisao = {
                causador: selecionado,
                dataRescisao: dataRescisao
            }
            rescindirContrato(contratoDetail.id, infoRecisao)
        } else {
            alert("Necessário selecionar causador!")
        }
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
                        <label> Data da rescisão:</label> 
                        <input type='date' value={dataRescisao} onChange={e => setDataRescisao(e.target.value)} required/>
                    </FormContainer>
                    <input 
                        type="radio"
                        checked={selecionado === 'CONTRATANTE'}
                        onChange={() => handleCheckboxChange('CONTRATANTE')}
                    /> 
                    <label>Pelo contratante</label>  
                    <input 
                        type="radio" 
                        checked={selecionado === 'FORNECEDOR'}
                        onChange={() => handleCheckboxChange('FORNECEDOR')}
                    /> 
                    <label> Pelo fornecedor</label> 
                </CheckboxContainer>  
                    
                <FormContainer>
                <input type='text' placeholder='Motivação'/>
                </FormContainer>
                <FormContainer>
                    <center className="bottom">
                    <Button onClick={(e) => e.preventDefault() + navigate(-1)}>Voltar</Button>
                    <Button onClick={handleRescisao} className="warning">Rescindir</Button> 
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

export default RescindirContrato;