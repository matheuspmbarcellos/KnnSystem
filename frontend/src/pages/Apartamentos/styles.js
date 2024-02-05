import styled from "styled-components";

export const ApartamentosContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

}


`
export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

input {
    color: #131129;
    background-color: #131129;
    border-radius: 5px;    
    height: 5%;
    width: 30%;
    padding: 6px;
    border: solid 0.6px;
    margin: 1%;

    &:focus {
        color: white;
    }
`