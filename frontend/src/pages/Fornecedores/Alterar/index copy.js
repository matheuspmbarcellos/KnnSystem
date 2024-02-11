import { AlterarContainer, FornecedorContainer, SubtituloContainer, CorpoContainer, Titulo, Dado } from "../Detalhar/styles";

const AlterarFornecedor = () => {

  return (
    <FornecedorContainer>
        <h7>Razão Social</h7>
        
        <SubtituloContainer>
            <ul>
                <li><p>CNPJ: 1234578910</p></li>
                <li><p>Categoria</p></li>           
                <li><p>Código</p></li>
            </ul>           
           
        </SubtituloContainer>
        <AlterarContainer>
          <CorpoContainer>
            <Titulo>Nome do Responável</Titulo>
            <Dado>Fulano Sicrano</Dado>
            <Titulo>E-mail do Responável</Titulo>
            <Dado>fulanos123@gmail.com</Dado>
            <Titulo>Telefone</Titulo>
            <Dado>25-2345-5324</Dado>
          </CorpoContainer>

          <CorpoContainer>
          <Titulo>E-mail corporativo</Titulo>
            <Dado>corporativo@corp.com</Dado>
            <Titulo>Domicílio bancário</Titulo>
            <Dado>fulanos123@gmail.com</Dado>
            <Titulo>Endereço</Titulo>
            <Dado>Rua. XXX
              <p>Rio de Janeiro - RJ CPF</p>
            </Dado>
          </CorpoContainer>   
        </AlterarContainer>


    </FornecedorContainer>
  )
}


export default AlterarFornecedor;