import styled from "styled-components";

export const HomeContainer = styled.div`

`

export const Banner = styled.div`
max-width: 100%;
height: 200px;
display: block;
background: url(./teste.jpg);
margin-bottom:5%;
object-fit: fill;
`

export const InfosContainer = styled.div`
display: flex;
width: 20%;
text-align: left;
flex-direction: column;
margin-left: 80%;
padding-bottom: 2%;

h3 {
color: limegreen;
font-size: 0.7em;
margin: 1%;
}

h4 {
color: #131129;
font-size: 0.7em;
font-weight: lighter;
}
}
`