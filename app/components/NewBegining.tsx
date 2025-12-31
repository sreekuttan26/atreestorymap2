import React from 'react'
import Heading from './Heading'

const NewBegining = () => {
    return (
        <div className='flex flex-col gap-5 p-5 '>
            <Heading text='A New Beginning' />
            <ul className="list-disc px-4  mb-4 space-y-2">
                <li>The pied kingfisher has returned to Venkateshpura Lake. Watching it hover on the lake before diving down to fish gives us hope. The water looks clearer, and the water quality metrics show improvement. Residential areas around the lake haven't ordered a water tanker since the restoration – evidence that the lake is performing its role as an aquifer.</li>
                <li>Walkers, old and young, and enthusiastic birders are regulars at the lake. It has become a safe place for women to sit after work on a hot afternoon.</li>
                <li>Following restoration, biodiversity assessments showed a slight decline in some species. But these were short-term responses to habitat reformation. The system soon stabilised.</li></ul>
                                
               However, the work is far from over.
                <ul className="list-disc px-4  mb-4 space-y-2">
                <li>Water quality must remain consistent, especially in the summer months when the lake recedes, and dissolved oxygen levels can drop to alarming levels. The floating islands and the new plants demand regular care.</li>
                <li>Sustained efforts over the years to retain water in Venkateshpura Lake have helped ensure year-round water storage, supporting groundwater recharge and local ecology. However, these changes have also altered the lake’s natural flow, reducing circulation and occasionally leading to stagnant conditions and algal blooms. As the catchment urbanised, such shifts were inevitable.</li>
                <li>Improving the inlets with nature-based solutions, such as vegetated bends that slow the flow and absorb nutrients before the water enters the lake, is a good way to support the lake’s long-term health.</li>
                <li>While the lake has been restored, the fencing around it, intended to address safety concerns, has unfortunately resulted in limited access for some of the key actors, particularly migrants and pastoralists.</li>
                <li>Preventing illegal drainage into the lake and protecting the fragile historical GTS structure calls for constant vigilance.</li>
                

            </ul>
            Restoration, after all, is not an endpoint but a continuous process that requires upkeep and shared responsibility.
        </div >
    )
}

export default NewBegining
