import React from 'react'
import Heading from './Heading'
import Bodytext from './Bodytext'

const Introduction = () => {
  return (
    <div>
        <Heading text='Introduction'/>
        <Bodytext text={<span>
            This is a story of Venkateshpura Lake – a modest freshwater lake tucked away in the northern part of Bengaluru, a story of how this urban lake lost its vitality as human development took precedence. Over time, it turned into a stagnant, degraded water body, until one day, a few concerned citizens decided to bring it back to life, not just for the lake’s sake, but for their own.

        </span>}/>
      
    </div>
  )
}

export default Introduction
