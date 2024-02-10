import styled from "styled-components";

export const HomeContainer = styled.div`

`

export const Valores = styled.div`
columns: 3;
`



export const InfosContainer = styled.div`
width: 70%;
text-align: left;
align: center;
margin-left: 12%;
list-style-type:none;
line-height: 1.8;
font-size: 1.5em;


h1 {
    margin-top: 8%;
    font-size: .5em;
    font-weight: bold;
    background-color: limegreen;
    color: white;
    width: 12%;
    }

p{
    padding: 1%;
    margin-bottom: 3%;
}

li {
width:100%;
margin: 1%;
font-size: .7em;

&:hover {
    color: limegreen;
}
`