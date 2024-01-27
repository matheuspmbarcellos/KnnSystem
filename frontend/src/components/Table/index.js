import * as React from "react";
import { Editar, ResultadoContainer, Deletar, Detalhar } from "./styles";
import resultado from "./mock-resultado.json";
import { useTable } from "react-table";

const Table = () => {
  const data = React.useMemo(() => resultado, []);
  const columns = React.useMemo(() => [

  {
    Header: "Razão Social",
    accessor: "razao_social",
  },

  {
    Header: "CNPJ",
    accessor: "cnpj",
  },

  {
    Header: "Categoria",
    accessor: "cat",
  },
  {
    Header: "Código",
    accessor: "cod",
  },

],
  []
);

const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

return (
    <ResultadoContainer>

      <table {...getTableProps()}>

        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
             </tr>
          ) )}
        </thead>

        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row)
            return(
              <tr {...row.getRowProps()}>
                {
                  row.cells.map((cell) => (
                    <td {...cell.getCellProps}>
                      {cell.render("Cell")}
                    </td>
                 ))} 
                   <Detalhar>detalhar</Detalhar>
                    <Editar>editar</Editar>
                    <Deletar>deletar</Deletar> 
               </tr>
            );
            })}
        </tbody>
      </table>
   </ResultadoContainer>

  )

}



export default Table;