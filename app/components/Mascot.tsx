import React from 'react'
import Heading from './Heading'
import Bodytext from './Bodytext'

const Mascot = () => {
    return (
        <div className='w-full bg-blue-50 p-4'>
            <Heading text={"Choosing our mascot- The Pied kingfisher"} />
            <div className="w-full flex flex-col md:flex-row gap-2 items-center">
                <img
                    src="/bird-sit.gif"
                    alt="bird"
                    className='md:w-[20vw] w-[30vh] object-conatin '
                />
                <Bodytext text={"The Pied Kingfisher, a striking black-and-white bird  – seeks clear lakes and rivers , diving effortlessly in pursuit of fish and other aquatic prey. However, as pollution clouded the waters and stagnant conditions prevailed, the Pied kingfisher, which was once seen here, disappeared. It became the natural choice as the indicator species for a healthy lake."} />

            </div>


        </div>
    )
}

export default Mascot
