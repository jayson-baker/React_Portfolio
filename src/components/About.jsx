import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0A192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full x-4 grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#e69b3a]'>About</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-left text-4xl font-bold'>
                    <p>Hello, my name is Jayson. Welcome to my portfolio page!</p>
                </div>
                <div>
                    <p>Brand new to Web Development, but eager to learn and grow my skills. I
          am a quick learner and have a true passion for coding! Most of my
          experience, as of now, is with JavaScript and React making discord
          bots and other personal projects for day to day use. Outside of the
          tech world, I am a Father of three children, a four year old terror
          and a pair of eighteen month old twins (one boy, one girl). Between
          the little ones, my Wife, a more than full time job and now classes on
          top of all of it my days are always full! I love it! Late nights of
          coding and research are what truly excite me and I can not wait to
          tackle my next project.</p>
                </div>
            </div>
            </div>
        </div>
    
  )
}

export default About