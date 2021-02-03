import React from 'react'
import Griddle, {plugins} from 'griddle-react'
import Data from '../data/hospitalbeds3.json'


import styles from '../styles/griddle.css'

import { css } from "@emotion/react"
//import { rhythm } from "../utils/typography"


let LocalPlugin = require('griddle-react').plugins.LocalPlugin;


export const HospitalBeds = (props) => {
    return (
      <div>
        <h2>Hospital Bed Count</h2>
        <div
          css={css`
          
          //background-color: lavenderblush;
          th {background-color: black;
               padding: 10px;
              };
          td {
            padding: 5px;
            //background-color:#FFF;
            border-top-color:#DDD;
            //color:#222;
            text-align: center;
          }
          border:1px solid #DDD
       
       `}

        
        >
          <Griddle data={Data} plugins={[LocalPlugin]} showSettings={false} 
            
            columns={["Hospital", "Type", "City", "County", "State", "Licensed Beds", "Bed Utilization", "Bed Capacity"]} 
          />
        </div>
      </div>
    )
  }
  