import React from 'react'
import CharaCraft from '../assets/CharaCraft.png'
import FitnessForcast from '../assets/FitnessForcast.png'
import Placeholder1 from '../assets/Placeholder1.jpg'
import Placeholder2 from '../assets/Placeholder2.jpg'
import Placeholder3 from '../assets/Placeholder3.jpg'
import Placeholder4 from '../assets/Placeholder4.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0A192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#e69b3a]'>Work</p>
                <p className='py-6'>Take a look at some of my work</p>
            </div>

            {/* Work Cards */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${CharaCraft})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Table Game App</span>
                        <div className='pt-8 text-center'>
                            <a href="https://characraft-27a6d9fbde68.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/DuckTurtle/CharaCraft">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${FitnessForcast})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Fitness Weather App</span>
                        <div className='pt-8 text-center'>
                            <a href="https://boydstacken.github.io/fitness-forecast/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/boydstacken/fitness-forecast">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Placeholder1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>More To Come!</span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Placeholder2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>More To Come!</span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Placeholder3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>More To Come!</span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Placeholder4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>More To Come!</span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work