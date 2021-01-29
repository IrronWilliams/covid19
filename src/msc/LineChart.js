import React from "react"
import {Line} from 'react-chartjs-2'

/*Line component has a mandatory data prop, which is an object of data to be visualized.

  The options prop is optional. Can use prop to add title, alter scales and axis. 

  boderColor and backgroundColor correspond to the line and the area underneath the 
  line respectively.  pointBackgroundColor and pointBorderColor correspond to the 
  data points. Creating key/value pairs. The values is an array of rgba values.
  Charts allow me to toggle the visibility of one or more datasets in the chart. 
*/
export const LineChart = (props) => {
  const data = { //structure of the data object
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Covid Deaths Q1',
        data:[3, 2, 2, 1, 5],
        borderColor: ['rgba(255, 206, 86, 0.2)'],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
        pointBorderColor: 'rgba(255, 206, 86, 0.2)'
      },

      {label: 'Covid Deaths Q2',
      data: [1, 3, 2, 2, 3],
      borderColor: ['rgba(54, 162, 235, 0.2)'],
      backgroundColor: ['rgba(54, 162, 235, 0.2)'],
      pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
      pointBorderColor: 'rgba(54, 162, 235, 0.2)'
     }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Line Chart'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1
          }
        }
      ]
    }
  }
  return <Line data={data} options={options}  />
}

