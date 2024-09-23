import React from 'react'


const Footer = () => {
  return (


    <div className=' text-blue-500 h-[20vh] '>
      <div className=' grid grid-flow-col place-content-center pt-5  bg-bl gap-5 md:gap-7 text-2xl md:text-4xl'>

        <img src="https://img.icons8.com/?size=100&id=tHkqr9ySSm8H&format=png&color=000000" alt="" />
        <img src="https://img.icons8.com/?size=76&id=38295&format=png&color=000000" alt="" />
        <img src="https://img.icons8.com/?size=100&id=38268&format=png&color=000000" alt="" />

      </div>
      <div className='pt-5 grid grid-cols-1 place-items-center '>
        <h1 className='text-[16px] md:text-[20px] pb-px'>&copy; 2024 Disney.</h1>
        <p className='hidden sm:block'>&copy;  Disney &copy; Disney•Pixar &copy; & ™ Lucasfilm LTD &copy; Marvel. All Rights Reserved</p>

      </div>
    </div>
  )
}

export default Footer
