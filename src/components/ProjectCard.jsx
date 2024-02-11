
import React from 'react'

function ProjectCard({image, name, link}) {
  return (
    <div className='w-80 h-80 p-6 relative flex flex-col justify-between items-center group border overflow-hidden hover:scale-105 transition-transform ease-in-out duration-500'>
        <img width={50} height={50} alt='project' src={image} className='w-64 h-64' />
        <div className='flex justify-center items-center absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,60%)] -translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-in-out'>
            <a href={`${link}`} target='_blank' rel="noreferrer" className='text-white font-medium text-base m-auto hover:underline'>Visit link!</a>
        </div>
        <span className='text-white font-medium text-lg text-center w-full'>
            {name}
        </span>
    </div>
  )
}

export default ProjectCard