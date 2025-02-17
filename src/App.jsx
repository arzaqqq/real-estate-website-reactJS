import React from 'react'


import Headers from './components/Headers'
import About from './components/About'
import Project from './components/Project'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
   
      <Headers/>
      <About/>
      <Project/>
    </div>
  )
}

export default App
