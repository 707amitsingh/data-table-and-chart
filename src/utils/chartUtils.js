export const generateChartData = (categories, data = []) => {
  // remove stateId
  const updatedData = data.slice(1);
  const chartData = {
    xAxis: {
      categories,
    },
    series: [
      {
        data: updatedData,
      },
    ],
  };
  return chartData
};

export const getRowData = (data, selectedStateID) => data.filter(row => row[0] === selectedStateID)[0]