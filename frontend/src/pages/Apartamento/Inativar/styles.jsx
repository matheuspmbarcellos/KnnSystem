import styled from "styled-components";

export const ApartamentoContainer = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: left;
margin-left: 40px;
padding-bottom: 20px;

.title {
    font-weight: bold;
    font-size: 25px;
    color: #131129;
    padding: 40px 0 5px 50px;
}

.warning {
    background-color: red;
}

`
export const SubtituloContainer = styled.div`
display: flex;
flex-direction: column;
height: 20px;
min-width: 400px;
width: 800px;
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
margin-left: 60px;
margin-top: 40px;
margin-bottom: 40px;
margin-right: 150px;

.bottom {
display: flex;
flex-direction: column;
}
`

export const CorpoContent = styled.div`
width: 260px;
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