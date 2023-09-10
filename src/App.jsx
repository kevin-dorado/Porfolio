import { useState } from 'react'
import Nav from './layout/Nav'
import Home from './pages/home/Home'
import {Route, Routes} from 'react-router-dom'
import { Porfolio } from './pages/porfolio/Porfolio'
import { ContactMe } from './pages/contact me/ContactMe'

function App() {

  return (
    <>
      <div className=' flex min-h-screen dark:bg-[#111010]'>
        <div className=' max-w-2xl mx-auto flex-auto mt-8'>
          <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/porfolio' element={<Porfolio/>}/>
          <Route path='/contact-me' element={<ContactMe/>}/>
        </Routes>
        
          
        </div>
      </div>
    </>
  )
}

export default App
