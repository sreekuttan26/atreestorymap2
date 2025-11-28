import React from 'react'

const Banner = () => {
  return (
    <div className="w-full h-full relative">
      <video
        src="https://atree-communication.s3.amazonaws.com/Storymap_media/lake_low_2.mp4"
        loop
        muted
        autoPlay
        className="w-full h-[90vh] object-cover "
      />
      {/* overlay */}
      <div className="absolute top-0 left-0 bg-black z-5 w-full h-full opacity-0 "></div>

      <div className='absolute top-[50%] w-full text-white [word-spacing:0.2em] flex flex-col gap-2  uppercase text-2xl font-bold px-10 z-10 text-center lg:text-4xl'>
        <h1 className="  ">Bringing a Lake Back to Life</h1>
          <p className={`  lg:text-xl`}>A Blueprint for Urban Lake Restoration</p>
      </div>


    

    </div>
  )
}

export default Banner
