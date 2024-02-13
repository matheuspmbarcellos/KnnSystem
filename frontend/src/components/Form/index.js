import { FInput, FormContainer, ButtonContainer, FormC} from './styles'
import Button from '../Button/Button';
import React from 'react';

const Form = ({ formArr, submitBtn, linkSubmit }) => {
     return (
    
    <FormC>
      <form>
      {formArr.map(({  name, type, placeholder }) => (
       
       <FormContainer>
           <FInput name={name} type={type} 
             placeholder={placeholder}
            />
        </FormContainer>
        ))
        } 
        </form>

         <ButtonContainer>
                 <Button as="a" href={linkSubmit}> {submitBtn} </Button>
       </ButtonContainer>
    </FormC>

  )
};

Form.defaultProps = {
    formArr: [
        {
            placeholder: "placeholder",
            type: String,
        },
    ],
    submitBtn: "Entrar",
    linkSubmit: "./Home",
};

export default Form;
