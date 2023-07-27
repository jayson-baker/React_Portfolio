import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Jayson Baker Logo' style={{width: '120px'}}></img>
        </div>

        {/* Navbar Buttons */}
            <ul className='hidden md:flex'>
                <li>
                <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
                </li>
                <li><Link to="about" smooth={true} duration={500}>
          About
        </Link></li>
                <li><Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
                <li><Link to="work" smooth={true} duration={500}>
          Work
        </Link></li>
                <li><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0A192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
            </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEGPnG8B8sarcSfr3n3V9MPInAOAVFkXVF4&keywords=jayson%20baker&origin=RICH_QUERY_SUGGESTION&position=0&searchId=05d2e7f5-25d5-4508-b871-3f97e0de7944&sid=5fl">Linkedin <FaLinkedin size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-700'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/jayson-baker">GitHub <FaGithub size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-800'>
                    <a className='flex justify-between items-center w-full text-gray-300'><Link to="contact" smooth={true} duration={500}>E-Mail</Link><HiOutlineMail size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume <BsFillPersonLinesFill size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar