import React from 'react'
import Heading from './Heading'
import Bodytext from './Bodytext'

const History = () => {
    return (
        <div>
            <Heading text='History' />
            <div className='w-full flex justify-center items-center lg:items-start lg:justify-between  lg:gap-10 lg:flex-row flex-col '>
                <div className='lg:w-1/2 '>
                    <Bodytext text={<><i>“Keregalam Kattu, Maragalam Nedu”</i> “Build lakes, plant trees” – is a Kannada saying attributed to the mother of Kempe Gowda, the governor under the Vijayanagara Empire famed for founding Bangalore city. Kempe Gowda is remembered today for creating nearly a hundred lakes and lining the city’s roads with trees, shaping the city’s identity as the ‘City of Lakes’. Over the years, many lakes have been lost but a few like Venkateshpura Lake now stand as renewed hope amid rapid urbanisation.</>} />
                </div>
                <div className='lg:w-1/2 flex justify-center items-center p-5'>
                    <img src='/kg-1.png' className=' w-full h-[400px] object-contain object-left md:object-center' />

                </div>
            </div>


            {/* gts */}
            <h1 className='w-full text-xl  font-semibold color-b mt-10'>The Sampigehalli Auxiliary Tower Station</h1>
            <div className='w-full flex justify-center items-center lg:items-start lg:justify-between  lg:gap-10 lg:flex-row flex-col '>

                <div className='lg:w-1/2 flex justify-left items-left py-5'>
                    <img src='/GTS.png' className=' w-full  object-contain object-left ' />


                </div>



                <div className='lg:w-1/2 '>
                    <Bodytext text={<>Built in 1803, the Sampigehalli Auxiliary Tower Station (SATS) overlooking Venkateshpura Lake witnessed the Great Trigonometrical Survey (GTS) of India, one of history’s most ambitious scientific projects. Beginning in 1802, the GTS used triangulation to map the Indian subcontinent and even revealed Mt Everest as the world’s tallest peak. Its architect, Col. Lambton began a pilot survey in Bangalore, establishing auxiliary stations, like SATS, as key observation points to reduce errors. They became one of the many principal stations for triangulation. Once marked by a twelve-foot pillar, SATS now retains only the deep circular pit where it stood.</>} />

                    <video

                        src="https://atree-communication.s3.amazonaws.com/Storymap_media/history%20video.mp4"
                        className="w-full rounded-xl object-contain handle-video mt-10"
                        muted
                        playsInline
                        controls
                        poster="/GTS.png"
                    />
                </div>

            </div>



            {/* temple */}
            <h1 className='w-full text-xl  font-semibold color-b mt-10'>Jarabandemma Temple</h1>
            <div className='w-full flex justify-center items-center lg:items-start lg:justify-between  lg:gap-10 lg:flex-row flex-col '>

                <div className='lg:w-1/2 flex justify-left items-left py-5'>
                    <img src='/temple.png' className=' w-full  object-contain object-left' />


                </div>



                <div className='lg:w-1/2 '>
                    <Bodytext text={<><i>The Jarabandemma Temple,</i> perched on a rocky outcrop by the lake, is a historic sacred site believed to date back to the Mysore kings’ era. As per local tradition, it was a resting place for soldiers on the move. During the month of Shravan, villagers gathered here to pray for rain, offering <i>Ambali,</i> a millet-based dish. A spring from a natural cleft in the rock near the entrance is seen as a miraculous gift. Inside the temple, uncarved stones represent powerful protectors – <i>Jarubandemma, Akkayamma</i> and the <i>Saptamatheyaru</i> – central to the community.  </>} />


                </div>

            </div>

        </div>
    )
}

export default History
