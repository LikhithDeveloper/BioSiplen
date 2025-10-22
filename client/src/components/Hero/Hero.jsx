import React from 'react'
import vid from "../../assets/o_sowing-1.mp4"

export const Home = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <video
        className="w-full h-[89vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  )
}
