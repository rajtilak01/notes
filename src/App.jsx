import React from 'react'
import Backgroud from './components/Backgroud'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Backgroud/>
      <Foreground/>
    </div>
  )
}

export default App