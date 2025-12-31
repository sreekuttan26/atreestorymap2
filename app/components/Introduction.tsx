import React from 'react'
import Heading from './Heading'
import Bodytext from './Bodytext'

const Introduction = () => {
  return (
    <div>
        <Heading text='Introduction'/>
        <Bodytext text={<span>
            This is a story of Venkateshpura Lake – a neighbourhood lake tucked away in the northern part of Bengaluru. As the city grew around it, the lake gradually lost its ecological health, eventually slipping into stagnation and decline. Until a group of concerned citizens chose to bring it back to life – not only for the lake’s future, but for their own well-being. Their story of collective action offers important signposts for any community seeking to rejuvenate a lake.    

        </span>}/>
      
    </div>
  )
}

export default Introduction
