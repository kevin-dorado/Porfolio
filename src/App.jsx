import { useState } from 'react'
import Nav from './layout/Nav'
import Home from './pages/home/Home'
import {Route, Routes} from 'react-router-dom'
import { Porfolio } from './pages/porfolio/Porfolio'
import { ContactMe } from './pages/contact me/ContactMe'
import { Footer } from './layout/Footer'
function App() {

  return (
    <>
      <div className=' flex min-h-screen bg-[#111010]'>
        <div className='p-5 md:p-0 max-w-2xl mx-auto flex-auto mt-8'>
          <Nav/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/portfolio' element={<Porfolio/>}/>
              <Route path='/contact-me' element={<ContactMe/>}/>
            </Routes>
          <Footer/> 
        </div>
      </div>
    </>
  )
}

export default App
