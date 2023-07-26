import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0A192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full x-4 grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#e69b3a]'>About</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hello, my name is Jayson. Welcome to my portfolio page!</p>
                </div>
                <div>
                    <p>Info about me here!</p>
                </div>
            </div>
            </div>
        </div>
    
  )
}

export default About