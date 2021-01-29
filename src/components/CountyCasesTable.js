import React, {useMemo} from "react"
import {useTable, useGlobalFilter} from 'react-table'
import TopCountyCases from '../data/topcountycases.json'
import {COLUMNS} from '../components/CountyCasesColumn'
import './BasicTable.css'
import { GlobalFilter } from "./GlobalFilter"

/*using useMemo hook with arrow functions that returns columns and mock data; 
and both functions have an empty dependency array. with the memoized columns and  
data, can pass them in as arguments into the useTable hook. 

using the useMemo hook to ensure the data is not re-created on every render. if i did not 
memoize columns and data, react table would think that it is receiving new data on every 
render and attempt to recalculate a lot of logic every single time. this will affect the   
components performance. 

the useTable hook is just a function and calling the hook within the BasicTable 
function. passing hook an object as an argument and specify 2 properties, columns/data. 
setting columns to imported array of columns and data to imported mock data.

call to useTable will create an instance of the table. storing the instance value. 
*/
export const  FilterCountyCasesTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => TopCountyCases, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    }, useGlobalFilter)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state, //destructuring state for globalFilter
        setGlobalFilter //function to set global filter value
    } = tableInstance

    const {globalFilter} = state
    
    return(
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) =>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) =>(
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
                </tr>
                ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row) =>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) =>{
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
        </tbody>
    </table>
    </>
    )
}
