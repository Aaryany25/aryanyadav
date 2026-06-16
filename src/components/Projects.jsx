import React from 'react'
import bg from "../assets/bg.jpg"

function Projects() {
  return (
    <div className='w-full sm:w-1/2 lg:w-1/2 rounded-xl p-5 border border-white '>
      <img src={bg} className='rounded-xl border-2 object-cover shadow-lg w-full h-48'/>
      <div className='flex justify-between mt-2'>
        <h1>Title</h1>
        <p className='bg-green-400 py-1 text-sm px-5 rounded-xl'>Status</p>
      </div>
      <p className='mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, odit.
      </p>
    </div>
  )
}

export default Projects