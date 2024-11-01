import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from "react-router-dom"
import About from './Pages/About'

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='about' element= { <About/> } />
        </Routes>
    </div>
  )
}

export default App