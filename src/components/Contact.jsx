import React, { useState } from 'react'
import email from '../assets/images/email.svg'
import github from '../assets/images/github.svg'
import Linkedin from '../assets/images/linkedin.svg'
import cv from '../assets/images/cv_file.svg'
import message from '../assets/images/message.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function Contact() {
    const [showContact, setShowContact]= useState(false)
    useGSAP(()=>{
        const contactOpen= gsap.to(".contact",{
        duration:0.5,
        // scale: 1,
        width: "100%"
    }).pause()
    const  contactClose = gsap.to(".contact",{
        duration: 0.5,
        // scale: 0,
        width:0
    }).pause()
    
    showContact? contactOpen.play() : contactClose.play()
    },[showContact])
    
    function CopyEmail(){
        navigator.clipboard.writeText('abdelghani.bahri0@gmail.com')
        alert("abdelghani.bahri0@gmail.com \n Email copied, Looking forward to hearing from you")
      }
      function downloadCV(){
        // window.open('/ABDELGHANI_BAHRI.pdf', '_blank')

        const link= document.createElement('a')
        link.href='/ABDELGHANI_BAHRI.pdf'
        link.target= '_blank'
        link.rel= 'noopener noreferrer'
        link.click()

        const link2= document.createElement('a')
        link2.href='/ABDELGHANI_BAHRI.pdf'
        link2.download= 'ABDELGHANI_BAHRI.pdf'
        link2.click()
      }
  return (
    <div className='fixed right-5 top-28 z-10 overflow-visible w-fit'>
        {/* <button onClick={!showContact? OpenContact : closeContact} className='border rounded border-black bg-black'><img src={message} width={50} height={50} alt="Get in touch" title='Get in touch'/></button> */}
        <div className=' flex flex-col w-full justify-center  items-center gap-6 mt-12 transition-opacity duration-700 ease-in ' id='contact'>
            <div className='group flex flex-row-reverse justify-between hover:w-fit items-center' onMouseOver={() => setShowContact(true)} onMouseLeave={() => setShowContact(false)}>
                <a href="/" onClick={CopyEmail} className='w-12 h-12 border-2 border-black bg-white rounded-md shadow-[0_0_4px_2px_rgba(0,0,0,40%)] p-2 ' title="Click to copy email">
                <img className='w-12 h-full' src={email} width={10} height={10} alt='email' />
            </a>
                <p className='contact text-lg font-bold text-white bg-black w-fit group-hover:px-4 right-11 overflow-hidden'>abdelghani.bahri0@gmail.com</p>
            </div>
            <a href="/" title='Download CV' onClick={downloadCV} className='w-12 h-12 border-2 border-black bg-white rounded-md shadow-[0_0_4px_2px_rgba(0,0,0,40%)] p-2 ml-auto'>
                <img className='w-full h-full' src={cv} width={10} height={10} alt='as' />
            </a>
            <a href="https://github.com/GhaniBahri" title='visit repo' className='w-12 h-12 border-2 border-black bg-white rounded-md shadow-[0_0_4px_2px_rgba(0,0,0,40%)] p-2 ml-auto'>
                <img className='w-full h-full' src={github} width={10} height={10} alt='as' />
            </a>
            <a href="https://linkedin.com/in/abdelghani-bahri-0a190a159" title='visit linkedIn' className='w-12 h-12 border-2 border-black bg-white rounded-md shadow-[0_0_4px_2px_rgba(0,0,0,40%)] p-2 ml-auto'>
                <img className='w-full h-full' src={Linkedin} width={10} height={10} alt='as' />
            </a>
          </div>
    </div>
  )
}

export default Contact