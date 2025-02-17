import React from 'react'

import {assets} from '../assets/assets'

const Project = () => {
  return (
    <div className='conatiner mx-auto py-4 pt-20 px-6 md:px-20
    lg:px-32 text-cente my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects 
        <span className='underlien underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Exploring Our Portofolio </p>
    
    {/* Slide buttons  */}
    <div className='flex justify-end items-center mb-8'>
        <button className='p-3 bg-gray-200 rounded-full' aria-label='Previous'>
            <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button className='p-3 bg-gray-200 rounded-full' aria-label='Next'>
            <img src={assets.right_arrow} alt="Netx" />
        </button>
    </div>
    </div>
  )
}

export default Project
