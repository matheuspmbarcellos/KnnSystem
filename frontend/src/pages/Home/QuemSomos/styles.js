import styled from "styled-components";

export const HomeContainer = styled.div`
background-color:#131129;
height: 100%;
position: absolute;
`

export const Valores = styled.div`
columns: 3;

`

export const InfosContainer = styled.div`
margin-top: 8%;
width: 70%;
text-align: left;
align: center;
margin-left: 15%;
list-style-type:none;
line-height: 1.8;
font-size: 1.5em;
color: white;

h1 {
    font-size: .7em;
    font-weight: bold;
    background-color: limegreen;
    color: white;
    width: fit-content;
    border-radius: 6px;
    margin-top: 8%;
    }

    h2{
        font-size: .5em;
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