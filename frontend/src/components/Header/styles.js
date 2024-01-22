import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: #131129;
    color: #f2f2f4;
    display: flex;
    align-items: center;

`

export const LoginContainer = styled.div`
height:50%;
width: fit-content;
margin: 30px auto auto 29%;

button1 {
    padding-left: 5px;
    font-size: 9px;
}

button2 {
    padding-left: 5px;
    font-size: 9px;
}
`

export const KNNlogo = styled.button`
padding-left: 95px;
height:70px;
width: 200px;
background: url(./KNNlogo.png);
background-size: 85%;
position: relative;
background-repeat: no-repeat;
background-position: center;
border: none;
`;


export const Usuario = styled.button`
height:30px;
width: 30px;
color: white;
background: url(./person-circle.svg);
background-size: 95%;
background-repeat: no-repeat;
border: none;
margin: auto 30px 22px auto;

&:hover {
    transform: scale(1.1);
  }
`
;


