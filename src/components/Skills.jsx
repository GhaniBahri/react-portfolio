
import React from 'react'
import css  from '../assets/images/css.svg'
import d3  from '../assets/images/d3.svg' 
import firebase  from '../assets/images/firebase.svg' 
import github  from '../assets/images/github_white.svg'
import git from "../assets/images/git.svg"
import  html from '../assets/images/html.svg'
import javascript  from '../assets/images/JavaScript.svg'
import  nextjs from '../assets/images/nextjs.svg' 
import reactjs  from '../assets/images/react.svg'
import  sass from '../assets/images/sass.svg' 
import  tailwind from '../assets/images/tailwind.svg'
import  vue from '../assets/images/vuejs.svg'
import  figma from '../assets/images/figma.svg'
import  typescript from '../assets/images/typescript.svg'
import  nodejs from '../assets/images/nodejs.svg'
import  docker from '../assets/images/docker.svg'
import Marquee from "react-fast-marquee";
import spaceShape2 from '../assets/images/spaceShape2.svg'
import astronaut from '../assets/images/astronaut.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

function Skills() {
    gsap.registerPlugin(MotionPathPlugin);
    
  
    useGSAP(()=>{
        gsap.from(".galaxy2",{
          motionPath:{
            path: [
                  {x: 8, y: 8}, 
                  {x: 8, y: 0}, 
                  {x: 0, y: 0}, 
                  {x: 0, y: 8},
                  {x: 8, y: 8} // Add this line to close the path
                ],
                // autoRotate: true,
                curviness: 0.8,
          },
          // z:180,
          yoyo: true,
          ease: "power1",
          duration: 10,
          repeat: -1 // Add this line to make the animation repeat indefinitely
        })
        gsap.to(".astronaut",{
          motionPath:{
            path: [
                  {x: 8, y: 8}, 
                  {x: 8, y: 0}, 
                  {x: 0, y: 0}, 
                  {x: 0, y: 8},
                  {x: 8, y: 8} // Add this line to close the path
                ],
                // autoRotate: true,
                curviness: 0.8,
          },
          // z:180,
          yoyo: true,
          ease: "power1",
          duration: 10,
          repeat: -1 // Add this line to make the animation repeat indefinitely
        })
        
      },[])
  return (
    <section className='w-full flex flex-col items-center mt-8 relative overflow-hidden' id='skills'>
        <div className='absolute top-0 right-0 galaxy2 hidden md:block'>
        <img alt='space' width={400} height={300} src={spaceShape2} className='relative -right-20 top-0 ' />
        <img alt='astronaut' width={100} height={200} src={astronaut} className='astronaut relative -left-4 -top-80 w-64 h-96' />
      </div>
        <h2 className='w-4/5 md:w-72 mb-40 mt-16 h-20 text-white font-extrabold text-3xl py-4 border-x-[6px] border-white text-center align-middle'>SKILLS</h2>
        <div className='w-2/3  flex flex-col items-center'>
            <h3 className="text-xl w-full text-white text-left font-medium mx-auto pl-4 pb-4 mb-6 relative after:content-[''] after:absolute after:w-full after:h-px 
            after:bg-white after:left-0 after:bottom-0 before:content-[''] before:absolute before:w-[1.5px] before:h-full 
            before:bg-white before:left-0 before:top-0">
                Experienced with:</h3>
            {/* <div className='grid grid-cols-4 grid-rows-3 w-full gap-20 place-items-center'> */}
            <Marquee className='  ' speed={80} gradientColor='black' gradient={true} gradientWidth={200} autoFill>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                    <img className='w-20 h-20' width={10} height={10} alt='skill' src={d3}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>D3.js</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={tailwind}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'> TailwindCSS</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={sass}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>SASS/LESS</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={github}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>Github</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={git}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>Git</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={firebase}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>Firebase</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={figma}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>Figma</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={html}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>HTML</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={css}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>CSS</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={javascript}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>Javascript</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={reactjs}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>React</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={10} alt='skill' src={vue}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>Vue</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={15} alt='skill' src={nextjs}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>Nextjs</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={15} alt='skill' src={typescript}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>Typescript</h1>
                </div>
                <div className='flex flex-col items-center justify-between mx-8 my-8 w-32 h-32'>
                <img className='w-20 h-20' width={10} height={15} alt='skill' src={nodejs}/>
                    <h1 className='text-white font-semibold text-xl w-full text-center'>Nodejs</h1>
                </div>
            </Marquee>
            {/* </div> */}
            {/* <h3 className="text-xl text-white text-left font-medium w-full pl-4 pb-4 mt-16 mb-6 relative after:content-[''] after:absolute after:w-full after:h-px 
            after:bg-white after:left-0 after:bottom-0 before:content-[''] before:absolute before:w-[1.5px] before:h-full 
            before:bg-white before:left-0 before:top-0">
                Also learning:</h3>
            <Marquee className='  w-full flex justify-between' speed={30} gradientColor='black' gradient={true} gradientWidth={200} direction='right'>
                <img className='w-20 h-20 mx-36 my-8' width={10} height={10} alt='skill' src={typescript}/>
                <img className='w-20 h-20 mx-36 my-8' width={10} height={10} alt='skill' src={nodejs}/>
                <img className='w-20 h-20 mx-36 my-8' width={10} height={10} alt='skill' src={docker}/>
            </Marquee> */}
            {/* </div> */}
        </div>
    </section>
  )
}

export default Skills