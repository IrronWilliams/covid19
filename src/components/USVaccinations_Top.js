import React from 'react'
import { HorizontalBar } from '@reactchartjs/react-chart.js'
import vaccinations from '../data/vaccination_top3.json'

function vaccine() {
    let vaccination = vaccinations.map((item) => item.Administered)
    return vaccination
}
const vaccinate= vaccine()


export const TotalUS = (props) => {
  //structure of the data object
  const data = { 
    labels: ['AK', 'WV', 'ND', 'NM', 'SD', 'CT', 'DC', 'VT', 'OK', 'CO', 'ME',
             'LA', 'AK', 'IN', 'NY', 'MI', 'MT', 'FL', 'UT', 'OR',  
            ],
    //labels: month, //from function getMonth()
    datasets: [
      {
        label: 'Period: YTD Jan-23',
        data: vaccinate, //calling the vaccinations() function  
        height: 260,
        backgroundColor: [
            'rgba(7, 42, 200, 0.2)',
            'rgba(30, 150, 252, 0.2)',
            'rgba(162, 214, 249, 0.2)',
            'rgba(252, 243, 0, 0.2)',
            'rgba(255, 198, 0, 0.2)',
            'rgba(255, 78, 0, 0.2)',
            'rgba(142, 166, 4, 0.2)',
            'rgba(245, 187, 0, 0.2)',
            'rgba(236, 1859, 5, 0.2)',
            'rgba(190, 187, 187, 0.2)', //
            'rgba(252, 24, 33, 0.2)',
            'rgba(47, 36, 58, 0.2)',
            'rgba(250, 201, 184, 0.2)',
            'rgba(219, 138, 116, 0.2)',
            'rgba(1, 111, 185, 0.2)',
            'rgba(34, 174, 209, 0.2)',
            'rgba(109, 142, 160, 0.2)',
            'rgba(175, 169, 141, 0.2)',
            'rgba(57, 70, 72, 0.2)',
            'rgba(105, 153, 93, 0.2)',
          ],
          borderColor: [
            'rgba(7, 42, 200, 1)',
            'rgba(30, 150, 252, 1)',
            'rgba(162, 214, 249, 1)',
            'rgba(252, 243, 0, 1)',
            'rgba(255, 198, 0, 1)',
            'rgba(255, 78, 0, 1)',
            'rgba(142, 166, 4, 1)',
            'rgba(245, 187, 0, 1)',
            'rgba(236, 1859, 5, 1)',
            'rgba(191, 49, 0, 1),',
            'rgba(252, 24, 33, 1)',
            'rgba(47, 36, 58, 1)',
            'rgba(250, 201, 184, 1)',
            'rgba(219, 138, 116, 1)',
            'rgba(1, 111, 185, 1)',
            'rgba(34, 174, 209, 1)',
            'rgba(109, 142, 160, 1)',
            'rgba(175, 169, 141, 1)',
            'rgba(57, 70, 72, 1)',
            'rgba(105, 153, 93, 1)',
          ],
          borderWidth:1.5,
      },
      
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'State Vaccinations Rate per 100,000'
    },
    
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 400000,
            stepSize: 0
          }
        }
      ]
    }
  }
  return <HorizontalBar data={data} options={options}  />
}

export default TotalUS