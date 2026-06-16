import React from 'react'
import Projects from './Projects'

function AllProjects() {
  return (
    <div>
        <h2 className="text-sm font-semibold text-white mb-4">
        Work
      </h2>
      <div className='flex flex-wrap  justify-center'>

        <Projects/>
        <Projects/>
        <Projects/>
        <Projects/>
      </div>

    </div>
  )
}

export default AllProjects