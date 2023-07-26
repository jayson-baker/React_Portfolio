import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Jayson Baker Logo' style={{width: '120px'}}></img>
        </div>

        {/* Navbar Buttons */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div className='hidden'>
            <FaBars />
        </div>
        {/* Mobile Menu */}
            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

        {/* Social Icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar