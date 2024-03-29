import { useContext } from "react";
import { AlterarContainer, PageContainer, SubtituloContainer,
   CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import { FornecedorContext } from "../../../context/FornecedorContext";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";


const DetalharFornecedor = () => {
  const { fornecedorDetail } = useContext(FornecedorContext);
  const navigate = useNavigate();

  return (
    <>
    {fornecedorDetail ? (
        <PageContainer>
          <p className="title">{fornecedorDetail.razaoSocial}<span className={`${fornecedorDetail.status}`}> {fornecedorDetail.status}</span></p>
            <SubtituloContainer>
              <ul>
                  <li><p>CNPJ: {fornecedorDetail.cnpj.replace(
                    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
                    '$1.$2.$3/$4-$5'
                  )}</p></li>
                  <li><p>{fornecedorDetail.naturezaDoServico}</p></li>           
                  <li><p>COD: {fornecedorDetail.numeroControle}</p></li>
              </ul> 
          </SubtituloContainer>
          <AlterarContainer>
            <CorpoContainer>
              <CorpoContent>
                <Titulo>Nome Responsável</Titulo>
                <Dado>{fornecedorDetail.responsavel.nome}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>CPF Responsável</Titulo>
                <Dado>{fornecedorDetail.responsavel.cpf.replace(
                      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                      '$1.$2.$3-$4'
                )}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>Contato Responsável</Titulo>
                <Dado>{fornecedorDetail.responsavel.telefone}</Dado>
                <Dado>{fornecedorDetail.responsavel.email}</Dado>
              </CorpoContent>     
            </CorpoContainer>

            <CorpoContainer>
              <CorpoContent>
                <Titulo>E-mail corporativo</Titulo>
                <Dado>{fornecedorDetail.emailCorporativo}</Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>Endereço</Titulo>
                <Dado>
                {fornecedorDetail.enderecoCompleto}
                </Dado>
              </CorpoContent>
              <CorpoContent>
                <Titulo>Domicílio bancário</Titulo>
                <Dado>Agencia: {fornecedorDetail.domicilioBancario.agencia}</Dado>
                <Dado>Conta: {fornecedorDetail.domicilioBancario.contaCorrente}</Dado>
                <Dado>Banco: {fornecedorDetail.domicilioBancario.banco}</Dado>
                <Dado>PIX: {fornecedorDetail.domicilioBancario.pix}</Dado>
              </CorpoContent>
              </CorpoContainer>  
              <CorpoContainer>
                <center className="bottom">
                  <Button onClick={() => navigate(-1)}>Voltar</Button>
                </center>
              </CorpoContainer> 
            </AlterarContainer>
          </PageContainer>
      ) : (
        <p>Nenhum Fornecedor selecionado</p>
        )}
  </>
    )
    
}


export default DetalharFornecedor;