import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #131129;
    color: #f2f2f4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
`

export const LoginContainer = styled.div`
    padding-right: 40px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

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
    width: 350px;
    background: url(./KNNlogo.png);
    background-size: 85%;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
`;

export const UserPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    padding: 10px;

    h5 {
        font-size: 11px;
        color: #FFFFFF;
        font-weight: bold;
    }

    h6 {
        font-size: 10px;
        color: #FFFFFF;
    }
`

export const BtnSair = styled.button`
    font-size: 10px;
    color: #FFFFFF;
    border: none;
    background-color: #131129;
    
    &:hover {
        color: limegreen;
      }
`

export const Usuario = styled.button`
    border: 2px solid white;
    height:30px;
    width: 30px;
    color: white;
    background: url(./person-circle.svg);
    background-size: 95%;
    background-repeat: no-repeat;
    border: none;

    &:hover {
        transform: scale(1.1);
    }
`
;


