import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (


    <div className='  py-5 text-white   bg-[#220d22] h-[20vh] '>
      <div className=' grid grid-flow-col place-content-center   bg-bl gap-5 md:gap-7 text-2xl md:text-4xl'>

      <a  href="https://linkedin.com/in/tshegofatso-m-552a03276" target="_blank" >
        <FaLinkedin className="text-3xl hover:scale-125 transform transition-transform duration-300" />
       </a>

       <a href="" target="_blank" >
        <FaGithub className="text-3xl hover:scale-125 transform transition-transform duration-300" />
       </a>

      </div>
      <div className='pt-5 grid grid-cols-1 place-items-center bg-[#220d22]  '>
        <h1 className='text-[16px] md:text-[20px] '>&copy; 2024 Tshegofatso.</h1>
        <p className='hidden sm:block'>&copy;  Disney Api &copy;Tshegofatso,Disney Api All Rights Reserved</p>

      </div>
    </div>
  )
}

export default Footer
