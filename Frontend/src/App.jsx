import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
