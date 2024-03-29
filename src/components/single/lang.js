import React from 'react'
import { Chart } from "react-google-charts";


function Lang(props) {
    
  const options = {
    titlePosition: 'none',
    pieHole: 0.3,
    is3D: true,
    backgroundColor:"#161625",
    pieSliceTextStyle: {
      color: 'white',
    },
    legend:{
      textStyle: {
        color: 'white', 
        fontSize: 13
      },
      position:'right',
      alignment:'center',
    },
    chartArea:{
        left:0,
        top:0,
        height:'100%',
        width:'100%'
    }
  };

  return (
    <div>
         <Chart
            height="300px"
            width="600px"
            chartType="PieChart"
            data={props.lang}
            options={options}
        />
    </div>
  )
}

export default Lang