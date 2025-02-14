import React from 'react'
import Navbar from './Navbar'

const Headers = () => {
  return (
   
      <div className='min-h-screen bg-gray-800 bg-cover bg-center flex items-center w-full overflow-hidden' 
     style={{ backgroundImage: "url('/header_img.png')" }} id='Header'> 
     <Navbar/>
      </div>
   
  )
}

export default Headers
