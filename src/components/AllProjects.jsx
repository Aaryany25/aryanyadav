import React from 'react'
import Projects from './Projects'
const projects =[{
  title:"Gallon Go",
  description:"Water Gallon Delivery And Management System ",
  image:"",
  link:"",
  techStack:["React","Tailwind","Node Js","Mongo DB","ExpressJs"]
},
{
  title:"Portfolio Website",
  description:"Portfolio website for showcasing projects and skills ",
  image:"",
  link:"",
  techStack:["React","Tailwind","Git","NextJs ","NextAuth"]
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