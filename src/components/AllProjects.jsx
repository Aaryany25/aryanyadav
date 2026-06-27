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
  title:"PayTm",
  description:"Payment App ",
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
{projects.map(items=>{

       return <Projects title={items.title} description={items.description} tech={items.techStack}/>
})}
    
      </div>

    </div>
  )
}

export default AllProjects