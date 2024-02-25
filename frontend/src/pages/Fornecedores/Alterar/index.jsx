import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputContainer, AlterarContainer, PageContainer, SubtituloContainer, 
  CorpoContainer, Titulo, Dado, CorpoContent } from "../../../components/PagesStyles/alterar-detalhar-inativar";
import { FornecedorContext } from "../../../context/FornecedorContext";
import Button from "../../../components/Button/Button";


const AlterarFornecedor = () => {
  const { fornecedorDetail, atualizarFornecedor } = useContext(FornecedorContext);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({}); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    const fornecedoratualizado = {
        id: fornecedorDetail.id,
        razaoSocial: fornecedorDetail.razaoSocial,
        cnpj: fornecedorDetail.cnpj,
        domicilioBancario: {
          agencia: formData.agencia || fornecedorDetail.domicilioBancario.agencia,
          contaCorrente: formData.contaCorrente || fornecedorDetail.domicilioBancario.contaCorrente,
          banco: formData.banco || fornecedorDetail.domicilioBancario.banco,
          pix: formData.pix || fornecedorDetail.domicilioBancario.pix
        },
        responsavel: {
          nome: formData.nomeResponsavel || fornecedorDetail.responsavel.nome,
          cpf: formData.cpfResponsavel || fornecedorDetail.responsavel.cpf,
          telefone: formData.telResponsavel || fornecedorDetail.responsavel.telefone,
          email: formData.emailResponsavel || fornecedorDetail.responsavel.email
        },
        enderecoCompleto: formData.endereco || fornecedorDetail.enderecoCompleto,
        naturezaDoServico: fornecedorDetail.naturezaDoServico,
        emailCorporativo: formData.emailCorporativo || fornecedorDetail.emailCorporativo,
        numeroControle: fornecedorDetail.numeroControle
    }
    atualizarFornecedor(fornecedorDetail.id, fornecedoratualizado);
};

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
                  <Dado>{fornecedorDetail.responsavel.cpf.replace(
                    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                    '$1.$2.$3-$4'
                  )}</Dado>
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
                      value={formData.emailResponsavel || fornecedorDetail.responsavel.email}
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
              <center className="bottom">
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                <Button onClick={() => setEditing(!editing)}>
                  {editing ? 'Cancelar' : 'Editar'}
                </Button>
                {editing && (
                  <Button onClick={handleSaveChanges}>Salvar</Button>
                )}
              </center>
            </CorpoContainer>
          </AlterarContainer>
        </PageContainer>
      ) : (
        <p>Nenhum Fornecedor selecionado</p>
      )}
    </>
  );
};


export default AlterarFornecedor;