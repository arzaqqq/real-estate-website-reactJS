import React from 'react'
import Navbar from './Navbar'

// framer motion
import { motion } from "framer-motion"

const Headers = () => {
  return (
   
      <div 
     
      className='min-h-screen bg-gray-800 bg-cover bg-center flex items-center w-full overflow-hidden' 
     style={{ backgroundImage: "url('/header_img.png')" }} id='Header'> 
     <Navbar/>
     <motion.div 
      initial={{ opacity: 0, y:100 }}
      transition={{ duration:1.5 }}
      whileInView={{ opacity: 1, y:0 }}
      viewport={{ once: false }} 
     className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
      <h2 className='text-5xl m:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore your home dream</h2>
      <div className='space-x-6 mt-16'>
        <a href="#Projects" className='border border-white text-white py-3 px-8 rounded-full'>Project</a>
        <a href="#contact" className=' bg-blue-500 py-3 px-8 rounded-full'>Contact us </a>
      </div>
     </motion.div>
      </div>
   
  )
}

export default Headers
