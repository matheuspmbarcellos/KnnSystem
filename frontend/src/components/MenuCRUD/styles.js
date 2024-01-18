import styled from "styled-components";
import Button from "../../components/Button/Button";

export const MenuButton = styled(Button)`
color: #131129;
background: none;
font-weight: lighter;
font-size: 0.8em;
padding: 3%;

&:hover {
    text-decoration: underline; 
    cursor: pointer;
}
`;

export const ButtonContainer = styled.div`
width: 80%;
height: 12%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
;
`