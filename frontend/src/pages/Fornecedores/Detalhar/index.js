import { useEffect, useState } from "react";
import { AlterarContainer, FornecedorContainer, SubtituloContainer, CorpoContainer, Titulo, Dado, CorpoContent } from "./styles";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";


const DetalharFornecedor = () => {
  const [fornecedorDetail, setFornecedorDetail] = useState([])
  const { numeroControle } = useParams();

  useEffect(() => {
    const buscarNumeroControle = async () => {
      const params = {numeroControle};
      try {
          const response = await api.get('/fornecedor/api/consulta', { params });
          setFornecedorDetail(response.data);
          console.log(response.data);
          console.log(fornecedorDetail);
      } catch (error) {
          alert('Error fetching data:', error);
      }
    }
    buscarNumeroControle();

  }, [numeroControle, fornecedorDetail]);
  

  return (
    <FornecedorContainer>
        <h7>{fornecedorDetail.razaoSocial}</h7>
        
        <SubtituloContainer>
            <ul>
                <li><p>CNPJ: {fornecedorDetail.cnpj}</p></li>
                <li><p>{fornecedorDetail.naturezaDoServico}</p></li>           
                <li><p>{fornecedorDetail.numeroControle}</p></li>
            </ul>           
           
        </SubtituloContainer>
        <AlterarContainer>
          <CorpoContainer>
            <CorpoContent>
              <Titulo>Nome Responsável</Titulo>
              <Dado>Fulano Sicrano</Dado>
            </CorpoContent>
            <CorpoContent>
              <Titulo>CPF Responsável</Titulo>
              <Dado>49834649053</Dado>
            </CorpoContent>
            <CorpoContent>
              <Titulo>Contato Responsável</Titulo>
              <Dado>25-2345-5324</Dado>
              <Dado>fulanos123@gmail.com</Dado>
            </CorpoContent>     
          </CorpoContainer>

          <CorpoContainer>
            <CorpoContent>
              <Titulo>E-mail corporativo</Titulo>
              <Dado>corporativo@corp.com</Dado>
            </CorpoContent>
            <CorpoContent>
              <Titulo>Endereço</Titulo>
              <Dado>
                Rua. XXX - Rio de Janeiro - RJ
              </Dado>
            </CorpoContent>
            <CorpoContent>
              <Titulo>Domicílio bancário</Titulo>
              <Dado>Agencia: 1234</Dado>
              <Dado>Conta: 5432</Dado>
              <Dado>Banco: 001</Dado>
              <Dado>PIX: 407c1a87-d78c-4ae1-945b-2d1e91b68a93</Dado>
            </CorpoContent>
          </CorpoContainer>   
        </AlterarContainer>


    </FornecedorContainer>
  )
}


export default DetalharFornecedor;