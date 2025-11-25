import React from 'react'

type probs={
    image:string
}

const Pagebreak = ({image}:probs) => {
    const spacing = 'p-5 md:px-20  md:pt-10  bg-white ';
  return (
     <div className={`w-full h-full ${spacing} flex  flex-col items-center pb-0   justify-center `}>
        <div className={`w-[80vw] flex justify-center items-center  pt-50`}>

          <img
            src={image}
            alt='pagebreak'
            className='h-[150px] object-conatin object-bottom  '

          />
        </div>
        <div className="mt-20 w-full h-full"></div>


      </div>
  )
}

export default Pagebreak
