import React from 'react'

type probs={
    image:string
}

const Pagebreak = ({image}:probs) => {
    const spacing = 'p-5 md:px-20 lg:px-40 md:pt-20  bg-white ';
  return (
     <div className={`w-full h-full ${spacing} flex  flex-col items-end pb-0   justify-center  `}>
        <div className={`w-[80vw] flex   justify-center border-b-2 border-gray-100 border-dashed pt-20`}>

          <img
            src={image}
            alt='pagebreak'
            className='h-[50px] object-conatin object-bottom '

          />
        </div>
        <div className="mt-20 w-full h-full"></div>


      </div>
  )
}

export default Pagebreak
