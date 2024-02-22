import React from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from './styles';

function Checkbox() {
   return (
    <CheckboxContainer> 
        <HiddenCheckbox/>
        <StyledCheckbox/>
        <Text>teste</Text>

      </CheckboxContainer>
   );
}
export default Checkbox;