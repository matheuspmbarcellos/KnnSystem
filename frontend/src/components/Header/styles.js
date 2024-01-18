import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: #131129;
    color: #f2f2f4;
    display: flex;
    align-items: center;

`
export const KNNlogo = styled.a`
padding-left: 100px;
height:70px;
width: 200px;
background: url(./KNNlogo.png);
background-size: 90%;
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
background-size: 100%;
border: none;
margin: auto 20px auto auto;

&:hover {
    transform: scale(1.1);
  }
`
;


