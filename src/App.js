import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Table from "./components/Table/Table.jsx";
import { DATA_CATEGORIES } from "./constants";
import { generateChartData, getRowData } from "./utils/chartUtils";
import mockData from "./mockData/mockData.json";
import Chart from "./components/Chart/Chart";

function App() {
  // Hardcoding to show the data for LA state
  const [selectedRowId, setSelectedRowId] = useState([]);
  const [chartData, setChartData] = useState({});
  const [selectedState, setSelectedState] = useState("LA");

  const handleRowClick = (rowId) => {
    setSelectedRowId(rowId);
  };

  useEffect(() => {
    const rowData = getRowData(mockData[selectedState], selectedRowId);
    const data = generateChartData(mockData[DATA_CATEGORIES].slice(1), rowData);
    setChartData(data);
  }, [selectedRowId, selectedState]);

  return (
    <div className="App">
      <Header />
      <Table
        data={mockData[selectedState]}
        tableConfig={mockData[DATA_CATEGORIES]}
        handleRowClick={handleRowClick}
      />
      <Chart chartData={chartData} />
    </div>
  );
}

export default App;
