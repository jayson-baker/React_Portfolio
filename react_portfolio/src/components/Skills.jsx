import React from 'react'
import CSS from '../assets/CSS3_logo_and_wordmark.svg.png'
import HTML from '../assets/HTML5_logo_and_wordmark.svg.png'
import JavaScript from '../assets/JavascriptLogo.png'
import MongoDb from '../assets/Mongodb-PNG-Image-HD.png'
import ReactLogo from '../assets/react-logo.png'
import Tailwind from '../assets/Tailwind CSS.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0A192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#e69b3a]'>Experience</p>
                <p className='py-4'>Here are the technologies I am most familiar with</p>
            </div>
            <div className='w-full grid grid-col-2 sm:grid-cols-2 gap-6 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Logo" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript Logo" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MongoDb} alt="MongoDb Logo" />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="React Logo" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind Logo" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills