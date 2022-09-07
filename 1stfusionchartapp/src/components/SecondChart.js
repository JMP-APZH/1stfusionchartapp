// Step 1 - Include react
import React from "react";
import ReactDOM from "react-dom";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Pie3D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Pie3D, FusionTheme);

const chartData2 = [
    {
        "label": "Fruit",
        "value": "30"
      }, {
        "label": "Protein",
        "value": "23"
      }, {
        "label": "Vegetables",
        "value": "18"
      }, {
        "label": "Diary",
        "value": "15"
      }, {
        "label": "Grains",
        "value": "9"
      }, {
        "label": "Other",
        "value": "5"
      }
];

const chartConfigs2 = {
    type: 'pie3d',
    renderAt: 'chart-container',
    width: '100%',
    height: '400',
    dataFormat: 'json', // Data type
    dataSource: {
        "chart": {
          "caption": "Recommended Diet Chart for Jenifer",
          "showValues":"1",
          "numberSuffix": "%",
          "theme": "hulk-light",
          "enableMultiSlicing":"1"
  
        },
      // Chart Data - from step 2
      data: chartData2
    }
  };




const SecondChart = () => {


  return (
    <>
    <div>SecondChart</div>

    <div>
        <ReactFC {...chartConfigs2} />
    </div>
    </>
  )
}

export default SecondChart