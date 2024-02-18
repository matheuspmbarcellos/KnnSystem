import moment from 'moment';

export const Transacao = ({ data, descricao, valor }) => {
    
    return (
        <table>
            <td>{moment(data).format('DD-MM-YYYY')}</td>
            <td className="descricao">{descricao.toUpperCase()}</td>
            <td></td>
            <td>{valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
        </table>
      
    );
  };
  
export const ListaTransacoes = ({ transacoes, tipo }) => {
    const transacoesFiltradas = transacoes.filter(
        transacao => transacao.tipo === tipo
    );

    return (
        <>
        <h2>{tipo === 'DESPESA' ? 'SAÍDAS' : 'ENTRADAS'}</h2>
        {transacoesFiltradas.map(transacao => (
            <Transacao key={transacao.descricao} {...transacao} />
        ))}
        </>
    );
};
  
export const ResumoTransacoes = ({resultado}) => {
    const totalEntradas = resultado.totalEntradas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const totalSaidas = resultado.totalSaidas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const saldoInicio = resultado.saldoInicio.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const saldoFim = resultado.saldoFim.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return (
        <>
        <h3>TOTAL DE ENTRADAS  {totalEntradas}</h3>
        <h3>TOTAL DE SAÍDAS {totalSaidas}</h3>
        <h3>SALDO INÍCIO {saldoInicio}</h3>
        <h3>SALDO FINAL {saldoFim}</h3>
        </>
    )
}