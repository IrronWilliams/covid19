/*Total Counts By Month as of 1.21.21 */
import React from 'react'
import total_us_20 from '../data/totaluswsj.json'
import {Line} from 'react-chartjs-2'

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
    let data = total_us_20.map((item) => item.month)
    return data
}
const month = getMonth()

function getCases20() {
    let cases = total_us_20.map((item) => item.cases)
    return cases
}
const cases_20 = getCases20()

function getDeaths20() {
    let deaths = total_us_20.map((item) => item.deaths)
    return deaths
}
const deaths_20 = getDeaths20()


export const TotalUS = (props) => {
  //structure of the data object
  const data = { 
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
    //labels: month, //from function getMonth()
    datasets: [
      {
        label: 'Period: 2020',
        data: cases_20, //calling the getCases() function  
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
      text: 'Total US COVID Cases '
    },
    
    scales: {
      yAxes: [
        // {
        //   ticks: {
        //     min: 0,
        //     max: 10000000,
        //     stepSize: 0
        //   }
        // }
      ]
    }
  }
  return <Line data={data} options={options}  />
}

export default TotalUS