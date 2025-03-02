import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import {Routes,Route } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import University from './Components/University/University';


const App = () => {
  return (
        <div>
            <Navbar />
            
            <Routes >
              <Route path='/home' element ={<Hero/>} /> 
              <Route path='/program' element ={<Program />} /> 
              <Route path='/about' element={<About/>} />
              <Route  path='/contact' element={<Contact />} />
              <Route path='/university' element={<University />} />
            </Routes>
          <Footer />
        </div>
 
 
    
 
  )
}

export default App