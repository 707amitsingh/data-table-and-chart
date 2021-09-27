import React from "react";
import "./TableRow.css";

const TableRow = ({ tableRowData, handleRowClick, isTableHeader = false }) => {
  const handleTableRowClick = (rowId) => {
    // no action when the row is table header
    !isTableHeader && handleRowClick && handleRowClick(rowId);
  };
  return (
    <div
      className={ isTableHeader ? "tableHeaderRow" : "tableRow" }
      onClick={() => handleTableRowClick(tableRowData[0])}
    >
      {tableRowData.map((cellItem) => (
        <span className="tableCell">{cellItem}</span>
      ))}
    </div>
  );
};

export default TableRow;
