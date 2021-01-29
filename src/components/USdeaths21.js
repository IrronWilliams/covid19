/*Total Counts By Month as of 1.21.21 */
import React from 'react'
import total_us_21 from '../data/totaluswsj21.json'
import {Bar} from 'react-chartjs-2'

/*Line component has a mandatory data prop, which is an object of data to be visualized.

  The options prop is optional. Can use prop to add title, alter scales and axis. 

  boderColor and backgroundColor correspond to the line and the area underneath the 
  line respectively.  pointBackgroundColor and pointBorderColor correspond to the 
  data points. Creating key/value pairs. The values is an array of rgba values.
  Charts allow me to toggle the visibility of one or more datasets in the chart. 
*/

/*this functions works by mapping over the array of objects from the dataset. For each
object in the array, finds the key and returns its respective value. Map returns an object, 
so each value is placed in the object. Once iteration is complete, all objects are reviewed and all 
values from the key will be pushed in the array. I then take this array and pass it to the Linechart. 
*/
function getMonth() { //returning null. believe commas are needed between dates
    let data = total_us_21.map((item) => item.month)
    return data
}
const month = getMonth()

function getDeaths21() {
    let deaths = total_us_21.map((item) => item.deaths)
    return deaths
}
const deaths_21 = getDeaths21()


export const TotalUS = (props) => {
  //structure of the data object
  const data = { 
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
    //labels: month, //from function getMonth()
    datasets: [
      {
        label: 'Period: 2021',
        data: deaths_21, //calling the getDeaths() function  
        borderColor: ['rgba(54, 162, 235, 0.2)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)'
       },
      
    ]
  }

  const options = {
    title: {
      display: true,
      text: ''
    },
    
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 450000,
            stepSize: 0
          }
        }
      ]
    }
  }
  return <Bar data={data} options={options}  />
}

export default TotalUS