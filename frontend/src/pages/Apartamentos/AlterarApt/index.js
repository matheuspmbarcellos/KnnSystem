import { AlterarContainer, ApartamentosContainer, SubtituloContainer, CorpoContainer } from "./styles";

const AlterarApt = () => {

  return (
    <ApartamentosContainer>
        <h1>Razão Social</h1>
        
        <SubtituloContainer>
           <h2>CNPJ</h2><li/>
           <h2>Categoria</h2><li/>
           <h2>Código</h2>
        </SubtituloContainer>

        <AlterarContainer>
          <CorpoContainer>
            <titulo>Nome do Responável</titulo>
            <dado>Fulano Sicrano</dado>
            <titulo>E-mail do Responável</titulo>
            <dado>fulanos123@gmail.com</dado>
            <titulo>Telefone</titulo>
            <dado>25-2345-5324</dado>
          </CorpoContainer>

          <CorpoContainer>
          <titulo>E-mail corporativo</titulo>
            <dado>corporativo@corp.com</dado>
            <titulo>Domicílio bancário</titulo>
            <dado>fulanos123@gmail.com</dado>
            <titulo>Endereço</titulo>
            <dado>Rua. XXX
              <p>Rio de Janeiro - RJ CPF</p>
            </dado>
          </CorpoContainer>
        
            
        </AlterarContainer>


    </ApartamentosContainer>
  )
}


export default AlterarApt;