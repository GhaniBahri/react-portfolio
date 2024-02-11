
import React from 'react'
import spaceShape from '../assets/images/space_shape1.svg'
// import spaceShape2 from '../../public/spaceShape2.svg'
// import astronaut from '../../public/astronaut.svg'
import planet1 from '../assets/images/planet1.svg'
import email from '../assets/images/email.svg'
import github from '../assets/images/github.svg'
import aedin from '../assets/images/linkedin.svg'
import styles from '../assets/styles/HeroSection.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { MotionPathPlugin } from 'gsap/all';
// gsap.registerPlugin(MotionPathPlugin)
function HeroSection() {
    gsap.registerPlugin(MotionPathPlugin);
  function CopyEmail(){
    navigator.clipboard.writeText('abdelghani.bahri0@gmail.com')
    alert("abdelghani.bahri0@gmail.com \n Email copied, Looking forward to hearing from you")
  }
  useGSAP(()=>{
    gsap.to(".planet1",{
      x: 45,
      y:20,
      repeat: -1,
      ease: "power1",
      duration: 8,
      yoyo: true,
      yoyoEase: "power1"
    })
    gsap.to(".galaxy1",{
      motionPath:{
        path: [
              {x: 0, y: 0}, 
              {x: 8, y: 0}, 
              {x: 8, y: 8}, 
              {x: 0, y: 8},
              {x: 0, y: 0} // Add this line to close the path
            ],
            // autoRotate: true,
            curviness: 0.8,
      },
      // z:180,
      yoyo: true,
      ease: "power1",
      duration: 5,
      repeat: -1 // Add this line to make the animation repeat indefinitely
    })
    
  },[])
  
  return (
    <section className='w-full flex flex-col items-center justify-center bg-transparent text-white text-center relative overflow-hidden'>
      <div className='absolute top-48 left-0  galaxy1'>
        <img alt='space' width={500} height={300} src={spaceShape} className='relative -left-28 top-0 -rotate-[20deg]'/>
        <div className={styles.spaceShapesm+' relative left-[20rem] -top-36 shadow-[0_0_0_4px_black]  bg-white  w-36 h-28'}></div>
        <img src={planet1} alt='planet' width={100} height={100} className='planet1 w-32 h-32 relative left-48 -top-[35rem] '/>
      </div>
      <div className='w-1/2 mx-auto flex flex-col items-center justify-start gap-2 px-8 mt-24 '>
          <p className='text-3xl font-bold w-full'>Hi, I&#39;m</p>
          <h1 className={styles.textOutline+' text-9xl w-full mt-12 mb-2 text-transparent font-londrina '}>ABDELGHANI BAHRI </h1>
          <h2 className='font-bold w-full text-5xl text-white '>Front-end Developer</h2>
          <div className='flex flex-row w-full justify-center  items-center gap-6 mt-12'>
            <a href="/" onClick={CopyEmail} className='w-12 h-12 bg-white rounded-sm shadow-[0_0_4px_2px_rgba(255,255,255,40%)] p-2'><img className='w-full h-full' src={email} width={10} height={10} alt='as' /></a>
            <a href="https://github.com/GhaniBahri" className='w-12 h-12 bg-white rounded-sm shadow-[0_0_4px_2px_rgba(255,255,255,40%)] p-2'><img className='w-full h-full' src={github} width={10} height={10} alt='as' /></a>
            <a href="https://www.aedin.com/in/abdelghani-bahri-0a190a159/" className='w-12 h-12 bg-white rounded-sm shadow-[0_0_4px_2px_rgba(255,255,255,40%)] p-2'><img className='w-full h-full' src={aedin} width={10} height={10} alt='as' /></a>
          </div>
      </div>
      <div className=' p-8 bg-transparent text-left w-11/12 mt-20'>
        <p className='w-full text-left text-white text-xl font-light leading-[40px]' id='about'>
As a front-end developer👨‍💻, my journey is fueled by an insatiable thirst for 📚knowledge📚 and an unwavering passion for growth. I welcome challenges with open arms, seeing them as opportunities to push myself and expand my skills. 🧭My compass is guided by curiosity, leading me through the constantly evolving world of web technologies🌐🖥️🖱️.

But development is not a solitary pursuit; teamwork🤝 is essential. I am skilled at collaborating with designers👨‍🎨, back-end engineers👨‍💻, and stakeholders to bring ideas💡 and users together through code. And when needed, I can take on leadership🌟 roles to drive projects towards success🎯.

My toolkit🧰 is versatile, ranging from creating responsive layouts💻📱 to implementing interactive animations using differnet frameworks. No matter the task📝 at hand, whether it's perfecting user interfaces or optimizing performance📈, I am comfortable in this dynamic ecosystem. So let's come together to build - combining our code, creativity, and camaraderie - because the web is waiting for us to make our mark🏷️✅.
        </p>
      </div>
    </section>
  )
}

export default HeroSection