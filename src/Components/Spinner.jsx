import React from 'react' 
import { FadeLoader } from 'react-spinners';



const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-10 py-52'>
     <FadeLoader color = {'#1c2fef'}/>
</div>

  )
}

export default Spinner
