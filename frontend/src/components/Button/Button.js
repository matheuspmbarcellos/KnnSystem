import styled, {css} from "styled-components";

const Button = styled.button`
    font-weight: bold;
    padding: 1.5%;
    border-style: none;
    border-radius: 12px;

    ${p => p.secondary ? css `
    background: #FFFFFF;
    text-decoration: underline;
    font-size: 0.7em;
    color: #131129;
    font-weight: lighter;
    width: 12em;

    `: css`
    background: #131129;
    font-size: 1em;
    color: white;
    width: fit-content;
    padding: 7px;
    `
 }

    &:hover {
        color: limegreen; 
        cursor: pointer;
    }
    }
`;

export default Button;