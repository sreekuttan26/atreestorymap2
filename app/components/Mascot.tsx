import React from 'react'
import Heading from './Heading'
import Bodytext from './Bodytext'

type MascotProps = {
    lockunloackbird: ()=>void
    lockedbird:boolean

}

const Mascot = ({lockunloackbird, lockedbird}:MascotProps) => {
    return (
        <div className='w-full bg-blue-50 p-4'>
            <Heading text={"Choosing our mascot- The Pied kingfisher"} />
            <div className="w-full flex flex-col md:flex-row gap-2 items-center">
                <div>
                    <div className='md:w-[20vw] w-[30vh]'>
                        <img
                            src="/bird-sit.gif"
                            alt="bird"
                            className={`w-full object-contain ${lockedbird ? 'opacity-0' : 'opacity-100'} `}
                        />
                    </div>

                    <div onClick={lockunloackbird} className='cursor-pointer mt-2  items-center justify-center flex border-blue-300 rounded-lg p-2 hover:bg-blue-100 animate-bounce'>
                        <p className={`text-sm  text-center ${lockedbird ? 'hidden' : 'flex'}`}>Unlock Me 🔓</p>
                        <p className={`text-sm  text-center ${lockedbird ? 'flex' : 'hidden'}`}>Lock Me 🔒</p>
                    </div>
                </div>

                <Bodytext text={"The Pied kingfisher, a striking black-and-white bird  – seeks clear lakes and rivers, diving effortlessly in pursuit of fish and other aquatic prey. However, as pollution clouded the waters and stagnant conditions prevailed, the kingfisher, which was once seen here, disappeared. It became the natural choice as the indicator species for a healthy lake."} />

            </div>


        </div>
    )
}

export default Mascot
