import React, {useState} from 'react';
import { FaTimes, FaBars, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'; 
import  { Link} from  'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ' >
        <div className='mx-5'>
            <h1 className='text-3xl text-pink-600'>Olayinka</h1>
        </div>

          {/* Menu */}
          <ul className=' mx-6 hidden md:flex'>
            <li className='Menu_links font-bold'><Link  to="home" smooth={true}  duration={500}>Home</Link></li>
            <li className='Menu_links font-bold'><Link  to="about" smooth={true}  duration={500}>About</Link></li>
            <li className='Menu_links font-bold'><Link  to="skills" smooth={true}  duration={500}>Skills</Link></li>
            <li className='Menu_links font-bold'><Link  to="project" smooth={true}  duration={500}>Project</Link></li>
            <li className='Menu_links font-bold'><Link  to="contact" smooth={true}  duration={500}>Contact Me</Link></li>
          </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 '>
          {!nav? <FaBars/>: <FaTimes/>}
        </div>

        {/* Mobile */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-1/2 h-fit bg-pink-600 flex flex-col justify-center items-center'}>
            <li className='py-4 text-3xl hover:text-gray-300 '><Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link></li>
            <li className='py-4 text-3xl' ><Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link></li>
            <li className='py-4 text-3xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
            <li className='py-4 text-3xl'><Link onClick={handleClick} to='project' smooth={true} duration={500}>
            Project
          </Link></li>
            <li className='py-4 text-3xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact Me
          </Link></li>
        </ul>

        {/* Social-Icons */}
        <div className=' hidden md:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/olayinka-bakare-0a253815a/" target={"_blank"}>Linkedin <FaLinkedinIn size={30}/></a>
            </li>
             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-gray-900'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/YhinkaDevOps" target={"_blank"}>Github <FaGithub size={30}/></a>
            </li>
             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-pink-900'>
              <a className='flex justify-between items-center w-full text-gray-300' href="" target={"_blank"}>Resume <BsFillPersonLinesFill size={30}/></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar