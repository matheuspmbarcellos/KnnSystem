import styled from "styled-components";

export const FornecedorContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 40px;

    .title {
        font-weight: bold;
        font-size: 25px;
        color: #131129;
        padding: 40px 0 5px 50px;
    }

`
export const SubtituloContainer = styled.div`
display: flex;
flex-direction: column;
height: 20px;
width: 50%;
align-items: left;
padding: 10px 0 10px 0;

ul {    
    margin-left: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

li {
    color:limegreen;
    font-size: 20px;
}

li > p {
    font-size: 20px;
    color: #131129;
    font-weight: 100;
    padding: 10px;

}

`
export const AlterarContainer = styled.div`
    font-size: 14px;
    color: #131129;
    display: flex;
    flex-direction: row;

`

export const CorpoContainer = styled.div`
font-size: 14px;
color: #131129;
display: flex;
flex-direction: column;
margin-left: 7%;
margin-top: 4%;
margin-right: 20%;
`

export const CorpoContent = styled.div`
    min-height: 70px;
`

export const Titulo = styled.div`
    font-weight: bolder;
    margin-bottom: 4px;
`
export const Dado = styled.div`
    font-weight: lighter;
    margin-bottom: 2px;
`
