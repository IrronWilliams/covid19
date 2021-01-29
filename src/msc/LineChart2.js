import React from "react"
import {Line} from 'react-chartjs-2'
import {CITIES} from '../data/Cities'


/*Line component has a mandatory data prop, which is an object of data to be visualized.

  The options prop is optional. Can use prop to add title, alter scales and axis. 

  boderColor and backgroundColor correspond to the line and the area underneath the 
  line respectively.  pointBackgroundColor and pointBorderColor correspond to the 
  data points. Creating key/value pairs. The values is an array of rgba values.
  Charts allow me to toggle the visibility of one or more datasets in the chart. 
*/

/*this functions works by mapping over the array of objects from the Cities dataset. For each
object in the array, finds the key land and return its respective value. Map returns an object, 
so each value is placed in the object. Once iteration is complete, all objects reviewed and all 
values from the key land will be in the array. I then take this array and pass it to the Linechart.  */
function getValue2() {
    //let data = [100,344]
    //Object.keys(CITIES).forEach(item =>data.push(CITIES[item].land))
    let content = CITIES.map((num) => num.land)
    return content
}
const please = getValue2()


export const LineChart2 = (props) => {
  const data = { //structure of the data object
    labels: ['City', 'State', 'Pop', 'Land'],
    datasets: [
      {
        label: 'Covid Deaths Q1',
        data: please,
        borderColor: ['rgba(255, 206, 86, 0.2)'],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
        pointBorderColor: 'rgba(255, 206, 86, 0.2)'
      },
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Line Chart2'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 40,
            max: 400,
            stepSize: 50
          }
        }
      ]
    }
  }
  return <Line data={data} options={options}  />
}

