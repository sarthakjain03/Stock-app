import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import LandingPage from './pages/LandingPage'
import StockDetails from './pages/StockDetails'

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <Routes>

              <Route path='/' element={<LandingPage />} exact />
              <Route path='/stockdetails/:id' element={<StockDetails />} />

            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
