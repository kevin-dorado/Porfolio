import { useState } from 'react'
import Nav from './Nav'
import Content from './Content'

function App() {

  return (
    <>
      <div className=' flex min-h-screen dark:bg-[#111010]'>
        <div className=' max-w-2xl mx-auto flex-auto mt-8'>
          <Nav/>
          <Content/>
        </div>
      </div>
    </>
  )
}

export default App
