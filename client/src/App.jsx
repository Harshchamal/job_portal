import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Applyjob from './pages/Applyjob'
import Application from './pages/Applications'
import Home from './pages/Home'; // ✅ You forgot this


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<Applyjob />} />
        <Route path='/applications' element={<Application/>} />
      </Routes>
    </div>
  )
}

export default App
