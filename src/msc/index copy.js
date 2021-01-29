import React from "react"
import Layout from "../components/layout"
import {LineChart} from '../components/LineChart'

/*Line component has a mandatory data prop, which is an object of data to be visualized.

  The options prop is optional. Can use prop to add title, alter scales and axis. 

  boderColor and backgroundColor correspond to the line and the area underneath the 
  line respectively.  pointBackgroundColor and pointBorderColor correspond to the 
  data points. Creating key/value pairs. The values is an array of rgba values.
  Charts allow me to toggle the visibility of one or more datasets in the chart. 
*/
// const LineChart = (props) => {
//   const data = { //structure of the data object
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Covid Deaths Q1',
//         data:[3, 2, 2, 1, 5],
//         borderColor: ['rgba(255, 206, 86, 0.2)'],
//         backgroundColor: ['rgba(255, 206, 86, 0.2)'],
//         pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
//         pointBorderColor: 'rgba(255, 206, 86, 0.2)'
//       },

//       {label: 'Covid Deaths Q2',
//       data: [1, 3, 2, 2, 3],
//       borderColor: ['rgba(54, 162, 235, 0.2)'],
//       backgroundColor: ['rgba(54, 162, 235, 0.2)'],
//       pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
//       pointBorderColor: 'rgba(54, 162, 235, 0.2)'
//      }
//     ]
//   }

//   const options = {
//     title: {
//       display: true,
//       text: 'Line Chart'
//     },
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             min: 0,
//             max: 6,
//             stepSize: 1
//           }
//         }
//       ]
//     }
//   }
//   return <Line data={data} options={options}  />
// }





export default function Home() {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
        <p>This is just a high level analyis of COVID data. Overall goal was to become
           familiar with using cool/sexy Gatsby, d3 analytic tools, React functions


        </p>
        <div style={{display:`flex`, justifyContent:`center`, width:`720px`}}>
          <LineChart />
        </div>
      </div>
    </Layout>
  )
}