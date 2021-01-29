import React from "react"
import Layout from "../components/layout"
import USdeaths20 from '../components/USdeaths20'
import USdeaths21 from '../components/USdeaths21'
import VaccinateTop from '../components/USVaccinations_Top'
import VaccinateBottom from '../components/USVaccinations_Bottom'

import { FilterCountyCasesTable} from '../components/CountyCasesTable'
import { FilterCountyDeathsTable} from '../components/CountyDeathsTable'

import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"

export default function Home() {
  return (
    <Layout>
      <h1>The Deadliest Year In US History</h1>
      <div>
        <img style={{width:`85%`, height: `auto`, }}
          src="https://images.unsplash.com/photo-1584981344812-aac1f5a6ec91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2012&q=80"
          //src="https://images.unsplash.com/photo-1609743522471-83c84ce23e32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEwfHxjb3JvbmF2aXJ1c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="covid"
        />

        <hr style={{width: `100%`, paddingBottom:`2.5px`, marginTop: `10px`}}></hr>
        <p>As a first-time user of Gatsby, I have become an enthusiast. I am impressed with its power, flexibility, simplicity, and elegance. I wanted to learn more about Gatsby, so I created an opportunity to engage it. I used Gatsby to create a modern site that reports data on the current state of the coronavirus pandemic. This project was a cool opportunity to link my multiple interests such as working with new technologies, web development, analyzing data and creating data visualizations. 
        </p>

        <p>
        To begin, Gatsby is an open-sourced static website generator that incorporates React (JavaScript library) and is powered by GraphQL (API query language). Gatsby compiles and optimizes your site’s code which results in extremely fast page loads. Gatsby complements the web development experience with its capability to leverage open-source innovations from the React and Gatsby tech communities. Gatsby can also pull data into your project from an array of sources including markdown files, WordPress and Contentful. 
        </p>

        <p>
        I found my first Gatsby project interesting, fun and creatively challenging.  The Gatsby environment looks and feels a lot like React. The consistency between the two frameworks such as the use of props and components helps with understanding the Gatsby fundamentals. However, there is a lot to comprehend and the Gatsby learning curve is a bit steep. With that said, my learning was supported by the well explained documentation and tutorials. The docs provides details on styling, data management, plugins, deployment among other topics.  
        </p>

        <p>
        Discovering Gatsby’s extensive plugin library was one of the high points with this project. I used a couple of CSS and UI plugins to experiment with both traditional and component-oriented styling. The different styling approaches were specifically applied to the data-grids displayed on the site. Overall, installing and using the plugins were straightforward. Some plugins had more installation and configurating steps than others. I was particularly interested in reviewing plugins specifically related to CMS and Analytics. This project does not make use of them. I intend to use more plugins in the future while working with richer COVID-19 datasets. The additional datasets will allow for deeper insights into the current state of the pandemic. 
        </p>

        <p> 
        While working with web applications, having to build some sort of table or grid to visualize data becomes inevitable. It is possible to create a web based table using traditional table tags. Depending upon the dataset and site complexity, managing table tags can become complex and time consuming. In such a situation, a component library can save a significant amount of time. Instead of managing table tags, I opted to use the React Table library to display data from the publicly available datasets sourced from Johns Hopkins, The Center for Disease Control and The New York Times. I leveraged the collection of React hooks to build the tables. Gatsby made it seamless to incorporate the table library into my application.
        </p>
        
        <p>
        I considered using D3.js (JavaScript data viz library) but opted not to. I knew I wanted to create non-complex data visualizations for this project and did not think the challenge of DOM management when integrating D3 with React was worth the squeeze. As a result, I opted to use ReCharts; a React-D3 library. Again, Gatsby made it easy to integrate the visualization library  into my application.   
        </p>

        <p>
        I thoroughly enjoyed my first experience developing my coronavirus pandemic website using Gatsby. Its benefits and features are impressive. Witnessing Gatsby's live reload feature immediately update my changes to the page when writing my local content was beneficial. I know I am just scratching the surface with Gatsby. I am looking forward to experiencing Gatsby’s other key benefits such as its intelligent image loading, asset optimization and data prefetching. I am excited to employ these features while I continue to enhance my pandemic website and develop other web applications in the future. I highly recommend Gatsby. I can’t wait to learn more. This is an incredible tool that is designed to enhance the user experience and build a better UI.
        </p>
        <hr style={{width: `100%`, paddingBottom:`2.5px`, marginTop: `10px`}}></hr>
        <p></p>
        
        <h1 style={{ textAlign: `center`, marginTop: `35px`}}>COVID-19 Current Counts </h1>

        <div 
          css={css` 
          display: flex;
          justify-content: space-evenly;
          border-style: solid;
          border-width: 1px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          padding-top: 20px;
       `} 
       >
         <h3 style={{}}>YTD Cases: 25M+</h3>
         <h3 style={{color: `red`}}>YTD Deaths: 425K+</h3>
         <h3 style={{color: `#cc5a71`}}>YTD Hospitalizations: 107K+</h3>    
      </div>

        <p style={{}}>The US coronavirus pandemic was a significant driver of deaths in 2020. COVID-19 became 
          the 3rd leading cause of death; lagging heart disease and cancer in 2020. During certain  
          periods last year, the virus was the number 1 killer of Americans and eventually 
          helped cement 2020 as the deadliest year in US history. 
          
          Daily death totals for COVID-19 were higher than the 
          number of deaths recorded on 9/11. By the close of December 2020, the virus 
          claimed over 346 thousand American lives.
        </p>

        <p>As of late January 2021, the virus has claimed the lives of over 420 thousand 
          Americans. The number of Americans that have died 
          from COVID-19 is approximately the population of Tampa, New Orleans, Cincinnati, 
          St. Louis or Pittsburgh. 
        </p>
          
        <div><USdeaths20 /> </div>
        <div><USdeaths21/></div>

        <h6>Source: The New York Times COVID-19 Tracking Initiative. Updated as of 01/27/21</h6>
        <hr style={{width: `100%`, paddingBottom:`2.5px`, marginTop: `10px`}}></hr>
        
        <div
          css={css`
           padding-top: ${rhythm(1.0)}; //adding space before Vaccination section
        `}
         >
          <h1 style={{ textAlign: `center`, }}>Vaccinations </h1>

          <div 
          css={css`
          //padding-top: ${rhythm(1.5)}; 
          display: flex;
          justify-content: space-evenly;
          border-style: solid;
          border-width: 1px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          padding-top: 20px;
       `} 
       >
         <h3 style={{}}>Distributed: 41M+</h3>
         <h3 style={{color: `#454955`}}>Administered: 22M+</h3>
         <h3 style={{color: `#ffd449`}}>1 Dose: 19M+</h3>
         <h3 style={{color: `green`}}>2 Dose: 3M+</h3>      
      </div>


             <p>It's fair to say the rollout of COVID-19 vaccines in the US has failed to meet expectations. 
               Some have cited the lack of transparency and visibility, absence of a national inoculation plan 
               and supply chain bottlenecks as contributing factors for currently stunting the distribution of the vaccine. 
                
               Although such challenges still remain, the pace of vaccine adminstration is rapidly evolving.   
               As of late January, 54% of the Moderna and Pfizer vaccines have been administered in the US.   
               This past week alone, the pace has increased to 1.1 million shots per day. </p>
             
              <p>The increasing trend in vaccine administration is not consistent by state. 
                The rates of vaccination and allocated supply vary by state.  
              Each state received an amount of the vaccine in proportion to its population. 
              Per the CDC, Alaska, West Virginia and North Dakota are the among the states who have administered the 
              highest rate of doses per 100,000 people. 
              The state of Massachusets has administered doses less than half of the doses administered in 
              Alaska.
              Idaho, Alabama and Nevada are the states with the lowest vaccination rates.  
              </p>

               <p>As states have expanding vaccine eligibility, some have struggled to manage the
                 increase in demand. 
               </p>
        </div>

        <div>
          <VaccinateTop />
          <VaccinateBottom />
        </div>
        <h6>Source: Centers for Disease Control and Prevention. Updated as of 01/23/21</h6>
        <hr style={{width: `100%`, paddingBottom:`2.5px`, marginTop: `10px`}}></hr> {/*adding line to separate sections */}


        <div
         css={css`
         padding-top: ${rhythm(1.0)}; //adding space after Vaccination section
        `}
        >
          <h1 style={{ textAlign: `center`, }}>Confirmed Cases And Deaths By County</h1>
          <p>Los Angeles, Maricopa, Cook and King are among the counties leading the country in the number of confirmed deaths and cases.  </p>
          <FilterCountyCasesTable />
          <FilterCountyDeathsTable />

        </div>
        <h6>Source: Johns Hopkins Coronavirus Resource Center. Updated as of 01/27/21</h6>
        <hr style={{width: `100%`, paddingBottom:`2.5px`, marginTop: `10px`}}></hr> {/*adding line to separate sections */}

        <div
         css={css`
         padding-top: ${rhythm(1.0)}; //adding space after Vaccination section
        `}
        >
          <h1 style={{ textAlign: `center`, }}>Next Steps </h1>
          <p>A deeper analysis on the current state of the pandemic. Insights from perspective of gender, race, location and specific communities.  </p>

        </div>

      </div>
    </Layout>
  )
}



//<div style={{display:`flex`, justifyContent:`center`, width:`700px`}}>
/*
By the end of December 2020, 1 in 20 Americans 
tested positive for COVID-19. 150 Americans tested positive for the virus every minute. 


*/

