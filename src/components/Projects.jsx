import React from 'react'
import hope from '../assets/images/Hope_Hub_logo.svg'
import go from '../assets/images/GO_logo.svg'
import echri from '../assets/images/echri.svg'
import potato from '../assets/images/default_Rotten_potato.svg'
import ProjectCard from './ProjectCard'

function Portfolio() {
    const projectList=[
        {
            name:"GO Platform",
            link:'https://go-platform.com/',
            img:go
        },
        {
            name:"Rotten Potato",
            link:'https://movie-project-rottenpotato.vercel.app/',
            img: potato
        },
        {
            name:"Echri",
            link:'https://e-chri.vercel.app/',
            img:echri
        },
        {
            name:"Hope Hub",
            link:'https://hope-hub.vercel.app/fr',
            img:hope,
        }
    ]
  return (
    <section className='w-full flex flex-col items-center mt-8 mb-16' id='portfolio'>
        <h2 className='w-4/5 md:w-72 mb-40 mt-16 h-20 text-white font-extrabold text-3xl py-4 border-x-[6px] border-white text-center align-middle'>PROJECTS</h2>
        <div className='w-full  flex flex-row flex-wrap items-center justify-evenly'>
        {
            projectList.map(project=>(
                <ProjectCard key={project.link} image={project.img} name={project.name} link={project.link}/>
            ))
        }
        </div>
    </section>
  )
}

export default Portfolio