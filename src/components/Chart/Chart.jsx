import React from "react";
import ReactHighchart from "react-highcharts"

const Chart = ({ chartData }) => {
    return (
        <ReactHighchart config={chartData} />
    )
}

export default Chart