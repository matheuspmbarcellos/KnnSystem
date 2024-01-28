import * as React from "react";
import { ResultadoContainer } from "./styles";
import Button from "../../../components/Button/Button";
import Table from "../../../components/Table";

const ResultadoApartamento = () => {
  return (
    <ResultadoContainer>
      <h1>Resultado</h1>
      <Table/>
      <Button as="a" href="/AlterarApt">ALTERAR</Button>
    </ResultadoContainer>
  )
}

export default ResultadoApartamento;