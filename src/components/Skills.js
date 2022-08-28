import React from 'react'
import HTML from "../image/html.png"
import CSS from "../image/css.png"
import JavaScript from "../image/javascript.png"
import REACT from "../image/react.png"
import Tailwind from "../image/tailwind.png"
import Github from "../image/github.png"
import MaterialUi from "../image/MUI.png"



const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] w-full h-screen text-gray-300' >
         {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          
            <div className='sm:text-center text-left pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-5'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5'>
                    <img className='w-10 mx-auto' src={HTML} alt="HTML-ICON" />
                    <p className='p-5'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5'  >
                    <img className='w-10 mx-auto' src={CSS} alt="" />
                    <p className='p-5'>CSS</p>
                </div>

                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5'>
                    <img  className='w-10 mx-auto' src={JavaScript} alt="" />
                    <p className='p-5'>JAVASCRIPT</p>
                </div>

                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5'>
                    <img className='w-10 mx-auto' src={REACT} alt="" />
                    <p className='p-5'>REACT</p>
                </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5'>
                    <img className='w-10 mx-auto' src={Tailwind} alt="" />
                    <p className='p-5 bold'>TAILWIND</p>
                </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5'>
                    <img className='w-10 mx-auto' src={Github} alt="" />
                    <p className='p-5'>GITHUB</p>
                </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5'>
                    <img className='w-10 mx-auto' src={MaterialUi} alt="" />
                    <p className='p-5'>MATERIAL-UI</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills