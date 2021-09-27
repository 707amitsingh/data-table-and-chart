import React from "react";
import TableRow from "../TableRow/TableRow";
import "./Table.css";

const Table = ({ data, tableConfig, handleRowClick }) => {

    return (
        <div className="table">
            <TableRow tableRowData={tableConfig} isTableHeader={true}/>
            { data.map(row => <TableRow tableRowData={row} handleRowClick={handleRowClick}/>)}
        </div>
    )
}

export default Table