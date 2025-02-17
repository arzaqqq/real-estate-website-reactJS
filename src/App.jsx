import React from 'react'


import Headers from './components/Headers'
import About from './components/About'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
   
      <Headers/>
      <About/>
      <Project/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
