import React from 'react'
import hero from "../assets/hero.jpeg"

function Hero() {
  return (
    <div className="absolute left-6 -bottom-16 z-10 flex items-center gap-4">
      <img src={hero} alt="hero" className="w-32 h-32 rounded-xl border-4 border-white object-cover shadow-lg"/>
      <div>
        <p className="text-4xl font-bold leading-tight drop-shadow-md text-white">
          Aryan Yadav
        </p>
        <p className="text-md text-gray-300">
          Full Stack Developer
        </p>
      </div>
    </div>
  )
}

export default Hero