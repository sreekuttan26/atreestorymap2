import React from 'react'

type probs={
    text:string
}

const Heading = ({text}:probs) => {

  return (
    <div className="w-full ">
        <h1 className="text-xl md:text-3xl font-extrabold color-b">{text}</h1>
      
    </div>
  )
}

export default Heading
