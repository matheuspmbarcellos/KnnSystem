import { FInput, FormContainer, ButtonContainer, FormC} from './styles'
import Button from '../Button/Button';

const Form = ({ formArr, submitBtn, linkSubmit }) => {
     return (
    
    <FormC>
      {formArr.map(({  name, type, placeholder }) => (
       
       <FormContainer>

           <FInput name={name} type={type} 
             placeholder={placeholder}
            />


        </FormContainer>
        ))} 
 
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
