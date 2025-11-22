import React from 'react'

type probs={
    url:string
    poster?:string
}

const Video = ({url, poster}:probs) => {
  return (
     <video


                        src={url}
                        className="w-full max-h-[50vh] rounded-xl object-contain handle-video"
                        muted
                        playsInline
                        controls
                        
                        poster={poster}
                        
                    />
  )
}

export default Video
