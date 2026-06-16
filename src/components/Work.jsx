import React from 'react'
import hero from "../assets/hero.jpeg"
import { useState } from "react";

function Work() {
      const [showMore, setShowMore] = useState(false);

  return (
    <>
    <div className='flex justify-between '>
        <div className='flex gap-2'>
 <img src={hero} className='w-12 h-12 rounded-xl border-2 border-white object-cover shadow-lg'/>
        <div>
            <h1>Spine India Technology</h1>
            <p className='text-xs text-gray-500'>FullStack Developer</p>
        </div>
        </div>
       <div className='text-gray-400 text-md flex flex-col'>
        Nov 2025
      <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-gray-400 mt-2"
          >
            {showMore ? "View Less" : "View More"}
          </button>
       </div>
       
    </div>
    {showMore && (
        <div className="mt-4 text-gray-300 space-y-2">
          <p>• Building a full-stack AI platform with real-time capabilities and scalable backend architecture.</p>
          <p>• Leading product direction, engineering, and open-source contributions.</p>
          <p>• Shipping features across web, backend, and AI integrations end-to-end.</p>
          <p>• Built automation tools to automate internal systems and workflows.</p>
        </div>
      )}
    </>
  )
}

export default Work