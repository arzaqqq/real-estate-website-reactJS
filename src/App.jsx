import React from 'react'


import Headers from './components/Headers'
import About from './components/About'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

// toastify npm
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
  <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Headers/>
      <About/>
      <Project/>
      <Testimonials/>
      <Contact/>
 </div>
  )
}

export default App
