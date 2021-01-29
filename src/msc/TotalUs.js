import React from 'react'
import {TotalUS} from './TotalUSDetail'
import * as d3 from 'd3'
import { median } from 'd3'
import _ from 'lodash' 


/*this function maps takes the TotalUSDetail dataset and maps over each object in the array. 
timeFormat reformats the date from '2021-01-21' to '2021-01'. returning an object containing 
all object properties with the revised date.  
*/

const dateParse = d3.timeParse('%Y-%m')
const TotalUS = (d) => ({
    date: dateParse(d['date']),
    cases: d.cases,
    death: d.deaths
})
console.log(TotalUS)

let deaths = d3.nest()
            .key(d =>d.date)
            .rollup((d)=>{
                return d3.sum((d)=>{return g.deaths})
            }).TotalUS






// function updateDate() {
//     let newDate = TotalUS.map((d) =>{
//         return{
//             date: dateParse(d['date']),
//             cases: d.cases,
//             death: d.deaths
//         }
//     })
// }
// data = updateDate() //should return an array of objects
// console.log(data[''])