import React from 'react'
import Heading from './Heading'

const NewBegining = () => {
    return (
        <div className='flex flex-col gap-5 p-5 '>
            <Heading text='A New Beginning' />
            <ul className="list-disc px-4  mb-4 space-y-2">
                <li>A self-sustaining model takes shape at Venkateshpura Lake.</li>
                <li>Sustained community-driven efforts transform the lake from a neglected waterbody into a vibrant public space.</li>
                <li>The lake attracts considerable daily footfall from the community. Even at noon, women can be seen sitting on the benches, enjoying the afternoon breeze.</li>
                <li>The lake forum is well-informed about potential pollution sources and knows whom to alert during issues like algal blooms.</li>
                <li>Members regularly document and share photos of birds, sunrises and sunsets, building pride and a sense of connection.</li>
                <li>Through the lake trust, residents take charge of the emerging challenges.</li>
                <li>The stage is set for a long-term, community-driven model of lake restoration.</li>



            </ul>
        </div>
    )
}

export default NewBegining
