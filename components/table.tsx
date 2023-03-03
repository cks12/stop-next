import React from 'react';
import { useTable } from 'react-table';
import { fields, playerFinished } from 'types';


interface Props {
  players: playerFinished[];
}

const Table: React.FC<Props> = ({ players }) => {
  // Define as colunas da tabela
const columns = React.useMemo(
  () => [
    {
      Header: 'Player',
      accessor: 'name',
    },
    ...players[0].fields.map((field) => ({
      Header: field.name,
      accessor: `fields.${field.name}.value`,
    })),
  ],
  [players]
);

  // Define os dados da tabela
  const data = React.useMemo(
    () =>
      players.map((player) => {
        const row:any = { id: player.id, name: player.name };
        row.fields = {}
        player.fields.forEach((field) => {
          if(row.fields[field.name] != undefined) return;
          row.fields[`${field.name}`] = {}
          row.fields[`${field.name}`].value = field.value;
        });
        console.log(row);
        return row;
      }),
    [players]
  );

  // Cria a tabela usando o hook useTable do react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<any>({
    columns,
    data:data,
    
  });

  return (
    <div className="overflow-x-scroll">
      <table {...getTableProps()} className="w-full table-auto">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr{...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column) => (
                <th
                {...column.getHeaderProps()}
                  key={index}  
                  className="px-4 py-2 text-white text-left sm:text-center"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row,index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell,index) => (
                  <td
                    {...cell.getCellProps()}
                    className="border bg-white px-4 py-2 sm:text-center"
                    key={index}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;