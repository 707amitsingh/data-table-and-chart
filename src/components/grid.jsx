import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import {
  ExcelExport,
  Inject,
  Toolbar,
  Edit,
} from "@syncfusion/ej2-react-grids";
import React, { useState } from "react";
import { data } from "./datasource2";
import { ExcelRenderer } from "react-excel-renderer";
import { transformGridData } from "./utils"

const ExportGrid = () => {

  const [fileContent, setFileContent] = useState(null);

  let grid = null;
  const editOptions = { allowEditing: true };
  const toolbar = ["ExcelExport"];
  const toolbarClick = (args) => {
    if (grid && args.item.id === "grid_excelexport") {
      grid.excelExport();
    }
  };

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        console.log(">>>>>>>>>> response: ", resp)
        const processedData = transformGridData(resp.rows)
        console.log(">>>>> proccessedData: ", processedData)
        setFileContent(processedData)
      }
    });               

  }
  return (
    <div>
      <input type="file" onChange={fileHandler} style={{ padding: "10px" }} />
      <GridComponent
        id="grid"
        dataSource={fileContent ? fileContent : data}
        height={270}
        editSettings={editOptions} 
        toolbar={toolbar}
        allowExcelExport={true}
        toolbarClick={toolbarClick}
        ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Order ID"
            width="120"
            textAlign="Right"
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width="150"
          />
          <ColumnDirective
            field="EmployeeID"
            headerText="Employee ID"
            width="150"
          />
          <ColumnDirective
            field="ShipName"
            headerText="Ship Name"
            width="150"
          />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport, Edit]} />
      </GridComponent>
    </div>
  );
};

export default ExportGrid;
