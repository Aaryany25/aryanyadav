import React from 'react'
import Projects from './Projects'
const projects =[{
  title:"CodeBox",
  description:"In Browser IDE For Frontend Development",
  image:"",
  link:"",
  techStack:["React","Tailwind"]
},
{
  title:"CodeBox",
  description:"In Browser IDE For Frontend Development",
  image:"",
  link:"",
  techStack:["React","Tailwind"]
}
]
function AllProjects() {
  return (
    <div>
        <h2 className="text-sm font-semibold text-white mb-4">
        Work
      </h2>
      <div className='grid grid-flow-col grid-rows-2 gap-4  '>

        <Projects/>
        <Projects/>
        <Projects/>
        <Projects/>
      </div>

    </div>
  )
}

export default AllProjects