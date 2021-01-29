import React from "react"
import Layout from "../components/layout"
import { HospitalBeds } from '../components/HospitalBedGriddle'


export default function About() {
  return (
    <Layout>
      <h1>COVID-19, A High Utilization Event</h1>
      <p>
        This dataset is provided by Definitive Healthcare and is intended to be used as a source for understanding bed capacity in the US. 
      </p>

      <p>Licensed Beds: Max number of beds for which a hospital holds a license to operate. This is the total number of licensed beds of individual hospitals within a given health system.</p>

      <p>Bed Utilization: Bed Utilization Rate = Total Patient Days (excluding nursery days)/Bed Days Available.
      </p>
  
      <p>Bed Capacity: The number of beds set up and staffed for use.
      </p>

      <HospitalBeds />
      <h6>Source: Definitive Healthcare, ESRI. Updated as of 01/25/21</h6>
    </Layout>
  )
}