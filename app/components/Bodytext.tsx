import { ReactNode } from "react"

type probs={
    text:ReactNode
}

const Bodytext = ({text}:probs) => {

  return (
    <div className="w-full pt-5">
        <h1 className="text-sm md:text-lg leading-7 text-gray-700 ">{text}</h1>
      
    </div>
  )
}

export default Bodytext