import React from 'react'
import Heading from './Heading'
import Bodytext from './Bodytext'

const Hydrology = () => {
  return (
    <div>
         <Heading text='Hydrology of the lake' />
         <Bodytext text={<span>
            The lakes in Bengaluru were constructed to harvest rainwater along the streams, and they flowed across an undulating terrain, connected by rajakaluves or stormwater drains. This network of lakes formed a seamless cascading system from a higher to lower elevation along three main valleys of the city – Hebbal-Nagawara, Koramangala-Challaghatta and Vrishabhavathi.
         </span>}/>
         <Bodytext text={<span>
            Venkateshpura Lake lies within the Hebbal-Nagawara Valley and has an independent catchment area that leads to the valley. It is at the apex of a series of lakes. 
         </span>}/>
         <Bodytext text={<span>
            Of the 72 lakes in this valley, only 32 still have adequate physical structures to allow water to flow. In many of these lakes, the inlets, outlets and stormwater drains that did exist were either broken or encroached upon by built structures or diverted to prevent raw sewage from flowing into these lakes.
         </span>}/>
         <Bodytext text={<span>
            Venkateshpura Lake receives water from stormwater drains and a few other inlets. Its outlet meets the outflow of Jakkur Lake, after which the combined flow drains downstream into Rachenahalli Lake.
         </span>}/>
      
    </div>
  )
}

export default Hydrology
