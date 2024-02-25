import styled from "styled-components";

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: left;

.title {
    margin-left: 48px;
    font-weight: bold;
    font-size: 25px;
    color: #131129;
    padding: 40px 0 5px 50px;
}

.warning {
    background-color: #b81414;
    &:hover {
        color: #111111; 
        cursor: pointer;
    }
}
.activate {
    background-color: limegreen;
    &:hover {
        color: #111111; 
        cursor: pointer;
    }
}

.ATIVO {
    margin-left: 5px;
    color: limegreen;
    font-size: 11px;
    font-style: italic;
    font-weight: bold;
}
.INATIVO {
    margin-left: 5px;
    color: #b81414;        
    font-size: 11px;
    font-style: italic;
    font-weight: bold;
}
.RESCINDIDO {
    margin-left: 5px;
    color: #b81414;        
    font-size: 11px;
    font-style: italic;
    font-weight: bold;
}



`
export const SubtituloContainer = styled.div`
display: flex;
flex-direction: column;
height: 20px;
min-width: 500px;
max-width: 900px;
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
margin-right: 15px;

}

`
export const AlterarContainer = styled.div`
margin-left: 40px;
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
export const InputContainer = styled.div`
width: 260px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

input {
    width: 100%;
    color: #131129;
    height: 20px;
    border-bottom: 1px solid #131129;
    border-top: none;
    border-left: none;
    border-right: none;

    &:focus {
        color: limegreen;
        outline: none;
    }
`