'use client'

import React, { useState } from 'react'
import Heading from './Heading'
import Accordion from './Accordion'
import Accordion_transformation from './Accordion_transformation '
import BeforeAfterSlider from './BeforeAfterSlider'

const Transformation = () => {
    const[current_img,Setcurrent_img]=useState('/t0.png')

    const update_img=(img_url:string)=>{
        Setcurrent_img(img_url)

    }


  return (
    <div className='w-full relative '>
        <div className='px-20'>
             <Heading text='Transformation' />
        </div>
           
            <BeforeAfterSlider/>

            <div className={`relative w-full flex flex-col gap-2 md:flex-row `} >
                {/* <img
                    src={current_img}
                    className='hidden md:flex w-2/3  absolute top-0 object-contain    '
                /> */}



                <img
                    src={current_img}
                    className='w-full md:w-1/2  md:h-full object-contain object-top  sticky top-12  bg-white z-20 '
                />
                <div
                    
                    className='w-full md:w-1/2  md:h-full object-contain object-top  sticky top-12  bg-white z-20 '
                />

                <div className='flex flex-col    md:w-1/2  h-auto md:z-21 '>

                    <Accordion_transformation update_img={update_img}/>
                </div>

            </div>


        </div>
  )
}

export default Transformation
