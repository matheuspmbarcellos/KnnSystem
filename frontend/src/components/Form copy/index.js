import { FInput, FormContainer, FormC, ButtonContainer} from './styles'
import Button from '../Button/Button';

const FormLong = ({ formArr, submitBtn, linkSubmit }) => {
     return (

    <FormC>
      {formArr.map(({  name, type, placeholder }, index) => (
       
       <FormContainer key={index}>
           <FInput  name = "controle"placeholder =  "Número de Controle"/>
            <FInput  name = "VigIn", type ="date",  placeholder = "Vigência inicial"/>
            <FInput  name = "VigF", type ="date",  placeholder = "Vigência final"/>

        </FormContainer>

        ))} 
 
         <ButtonContainer>
                 <Button as="a" href={linkSubmit}> {submitBtn} </Button>
       </ButtonContainer>
    </FormC>

  )
};

    name: "ValorIn",
    placeholder: "Valor mensal inicial",
  },
  { 
    name: "ValorAtual",
    placeholder: "Valor mensal atual",
  },

  { 
    name: "Servico",
    placeholder: "Serviço/Produto",
  },  
];

const formArr2 = [
    {
      name: "Gestor",
      placeholder: "Nome do gestor do contrato",
    },
    { 
      name: "CPF",
      placeholder: "CPF do gestor do contrato",
    },
    { 
      name: "Email",
      type: "email",
      placeholder: "E-mail do gestor do contrato",
    },
    { 
      name: "EmailS",
      type: "email",
      placeholder: "E-mail do síndico",
    },
    { 
      name: "ValorAtual",
      placeholder: "Valor mensal atual",
    },
  
    { 
      name: "Multa",
      placeholder: "Percentual de multa",
    },
  ];
export default FormLong;
