import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputContainer, AlterarContainer, FornecedorContainer, SubtituloContainer, CorpoContainer, Titulo, Dado, CorpoContent } from "./styles";
import { FornecedorContext } from "../../../context/FornecedorContext";
import Button from "../../../components/Button/Button";


const AlterarFornecedor = () => {
  const { fornecedorDetail } = useContext(FornecedorContext);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({}); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    // Lógica para enviar formData para o backend
    // Isso pode ser feito através de uma requisição HTTP (por exemplo, utilizando fetch ou axios)
    // Depois de salvar os dados, você pode atualizar a interface de acordo com a resposta do backend
  };

  return (
    <>
      {fornecedorDetail ? (
        <FornecedorContainer>
          <p className="title">{fornecedorDetail.razaoSocial}</p>
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
                {editing ? (
                  <InputContainer>                  
                    <input
                      type="text"
                      name="nomeResponsavel"
                      value={formData.nomeResponsavel || fornecedorDetail.responsavel.nome}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{fornecedorDetail.responsavel.nome}</Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>CPF Responsável</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="cpfResponsavel"
                      value={formData.cpfResponsavel || fornecedorDetail.responsavel.cpf}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{fornecedorDetail.responsavel.cpf}</Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>Contato Responsável</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="telResponsavel"
                      value={formData.telResponsavel || fornecedorDetail.responsavel.telefone}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="emailResponsavel"
                      value={formData.telResponsavel || fornecedorDetail.responsavel.email}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <>
                    <Dado>{fornecedorDetail.responsavel.telefone}</Dado>
                    <Dado>{fornecedorDetail.responsavel.email}</Dado>
                  </>
                )}
              </CorpoContent>
              
            </CorpoContainer>
            <CorpoContainer>
              <CorpoContent>
                <Titulo>E-mail corporativo</Titulo>
                {editing ? (
                  <InputContainer>                  
                    <input
                      type="text"
                      name="emailCorporativo"
                      value={formData.emailCorporativo || fornecedorDetail.emailCorporativo}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{fornecedorDetail.emailCorporativo}</Dado>
                )}
              </CorpoContent>
              <CorpoContent>
                <Titulo>Endereço</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="endereco"
                      value={formData.endereco || fornecedorDetail.enderecoCompleto}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <Dado>{fornecedorDetail.enderecoCompleto}</Dado>
                )}
              </CorpoContent><CorpoContent>
                <Titulo>Domicílio bancário</Titulo>
                {editing ? (
                  <InputContainer>
                    <input
                      type="text"
                      name="agencia"
                      value={formData.agencia || fornecedorDetail.domicilioBancario.agencia}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="contaCorrente"
                      value={formData.contaCorrente || fornecedorDetail.domicilioBancario.contaCorrente}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="banco"
                      value={formData.banco || fornecedorDetail.domicilioBancario.banco}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="pix"
                      value={formData.pix || fornecedorDetail.domicilioBancario.pix}
                      onChange={handleInputChange}
                    />
                  </InputContainer>
                ) : (
                  <>
                    <Dado>Agência: {fornecedorDetail.domicilioBancario.agencia}</Dado>
                    <Dado>Conta: {fornecedorDetail.domicilioBancario.contaCorrente}</Dado>
                    <Dado>Banco: {fornecedorDetail.domicilioBancario.banco}</Dado>
                    <Dado>Pix: {fornecedorDetail.domicilioBancario.pix}</Dado>
                  </>
                )}
              </CorpoContent>
            </CorpoContainer>
            <CorpoContainer>
              <center>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                <Button onClick={() => setEditing(!editing)}>
                  {editing ? 'Cancelar' : 'Editar'}
                </Button>
                {editing && (
                  <Button onClick={handleSaveChanges}>Salvar Alterações</Button>
                )}
              </center>
            </CorpoContainer>
          </AlterarContainer>
        </FornecedorContainer>
      ) : (
        <p>Nenhum Fornecedor selecionado</p>
      )}
    </>
  );
};


export default AlterarFornecedor;