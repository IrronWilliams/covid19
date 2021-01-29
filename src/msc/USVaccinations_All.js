import React from 'react'
import { HorizontalBar } from '@reactchartjs/react-chart.js'
import vaccinations from '../data/vaccinations.json'

function vaccine() {
    let vaccination = vaccinations.map((item) => item.vaccinatedpercent)
    return vaccination
}
const vaccinate= vaccine()


export const TotalUS = (props) => {
  //structure of the data object
  const data = { 
    labels: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI',
             'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',  
             'MO', 'MT', 'NE', 'NJ', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'RI',
             'SC', 'SD', 'TN', 'TX', 'UT', 'VI', 'VA', 'VT', 'WA', 'WV', 'WI', 'WY'
            ],
    //labels: month, //from function getMonth()
    datasets: [
      {
        label: 'Period: YTD Jan-21',
        data: vaccinate, //calling the vaccinations() function  
        height: 260,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
      },
      
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Total State Vaccinations(%)'
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