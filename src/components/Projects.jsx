import React from 'react'
import bg from "../assets/bg.jpg"

function Projects() {
  return (
    <div className=' mb-2 rounded-xl p-5 border border-white/10 bg-slate-750 shadow-sm'>
      <img src={bg} className='rounded-xl border border-white/10 object-cover shadow-lg w-full h-56'/>
      <div className='flex flex-col gap-3 mt-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-semibold'>Title</h1>
          <p className='bg-emerald-500 text-white py-1 text-sm px-4 rounded-full'>Status</p>
        </div>
        <p className='text-sm leading-6 text-slate-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, odit.
        </p>
      </div>
    </div>
  )
}

export default Projects