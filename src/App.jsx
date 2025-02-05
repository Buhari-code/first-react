import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import{ LanguageProvider }from './LanguageContext'

function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='home' element={<Home />}/>
      <Route path='aboutus' element={<AboutUs />}/>
      <Route path='contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
