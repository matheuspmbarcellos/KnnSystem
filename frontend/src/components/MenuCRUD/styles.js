import styled from "styled-components";
import Button from "../../components/Button/Button";

export const MenuButton = styled(Button)`
color: #131129;
background: none;
font-weight: lighter;
font-size: 0.8em;
padding: 8px;
margin-bottom: 3%;
margin-top: 3%;
&:hover {
    text-decoration: underline;
    font-weight: bold; 
    cursor: pointer;
}
`;

export const ButtonContainer = styled.div`
width: 80%;
padding: 10px;
height: 0.8em;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
;
`