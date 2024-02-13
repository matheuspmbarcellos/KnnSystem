import styled from "styled-components";

const ButtonSecondary = styled.button`
    font-weight: bold;
    padding: 1.5%;
    border-style: none;
    margin-left: 15px;

    background: #FFFFFF;
    text-decoration: underline;
    font-size: 0.7em;
    color: #131129;
    font-weight: lighter;
    width: 140px;

    &:hover {
        color: limegreen; 
        cursor: pointer;
    }
`;

export default ButtonSecondary;