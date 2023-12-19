import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/ContextProvider'
import TickerTable from '../components/TickerTable'

const LandingPage = () => {
  

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl'>Stock Info App</h1>
      <TickerTable />
    </div>
  )
}

export default LandingPage