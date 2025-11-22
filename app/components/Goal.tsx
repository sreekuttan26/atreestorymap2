import React from 'react'
import Heading from './Heading'
import Accordion from './Accordion'

const Goal = () => {
    return (
        <div className='w-full relative '>
            <Heading text='Goals' />
            <div className='relative w-full  flex flex-col gap-2 md:flex-row' >
                <img
                    src='/goal.png'
                    className='w-full md:w-1/3 h-[30vh] md:h-full object-contain object-top sticky top-12 bg-white z-20'
                />

                <div className='flex flex-col    md:w-2/3  h-auto  '>

                    <Accordion />
                </div>

            </div>


        </div>
    )
}

export default Goal
