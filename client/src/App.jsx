import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import LandingPage from './pages/LandingPage'
import StockDetails from './pages/StockDetails'
import SearchPage from './pages/SearchPage'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
          <div className='min-h-screen w-full'>
            <div className='w-full static'>
              <Navbar />
            </div>
            <div>
              <Routes>

                <Route exact path='/' element={<LandingPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/stockdetails/:id' element={<StockDetails />} />

              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
