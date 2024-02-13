import styled from "styled-components";

const Button = styled.button`
    font-weight: bold;
    border-style: none;
    margin: 15px;

    border-radius: 12px;
    text-decoration: none;
    background: #131129;
    font-size: 0.9em;
    color: white;
    width: fit-content;
    padding: 7px 10px;
    
 

    &:hover {
        color: limegreen; 
        cursor: pointer;
    }
`;

export default Button;