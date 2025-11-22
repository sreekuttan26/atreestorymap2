import React from 'react'

const Banner = () => {
  return (
    <div className="w-full h-full relative">
        <video
        src="https://atree-communication.s3.amazonaws.com/Storymap_media/lake_low.mp4"
        loop
        muted
        autoPlay 
        className="w-full h-[90vh] object-cover "  
       />
         {/* overlay */}
         <div className="absolute top-0 left-0 bg-black z-5 w-full h-full opacity-30 "></div>

       <h1 className=" absolute top-[50%] w-full text-white uppercase text-2xl font-bold px-10 z-10 text-center lg:text-4xl">Urban Lake Restoration Blueprint</h1>
      
    </div>
  )
}

export default Banner
