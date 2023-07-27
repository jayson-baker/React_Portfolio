import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div name='home' className='w-full h-screen bg-[#0A192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#e69b3a]'>Hello, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-slate-200'>Jayson Baker</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-slate-400'>I'm a Full Stack Developer</h2>
            <p className='text-slate-400 py-4 max-w-[700px]'>I'm a full-stack developer looking to break into the tech world and expand my knowledge and experience. I have a heavy focus on building responsive and user friendly web applications.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e69b3a] hover:border-[#e69b3a]'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          View Work
        </Link> 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home