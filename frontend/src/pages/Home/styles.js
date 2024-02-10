import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction:column;
    height: 90%;
    justify-content: space-between;
`

export const Banner = styled.div`
width: 100%;
height: 15em;
background: url(./predio.png);
background-size: 40%;
`

export const InfosContainer = styled.div`
display: flex;
width: 20%;
text-align: left;
flex-direction: column;
margin-left: 80%;
align-self: center;

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
`