import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='bg-gray-800 top-0 left-0'>
        <div className='flex justify-between items-center py-5 px-9'>
            <h1 className='text-2xl font-bold text-white cursor-pointer'>
                <span className=''>Stock </span>App
            </h1>
            
            <div className='flex justify-between items-center text-white md:w-[42%] lg:w-1/6'>
                <NavLink 
                    to={'/'}
                    key={'home'}
                >
                    <div className='flex justify-center items-center flex-col'>
                        <FontAwesomeIcon icon={faHouse} style={{color: '#fff'}} className='pb-1 text-xl'/>
                        <p className='font-semibold'>Home</p>
                    </div>
                </NavLink>
                <NavLink 
                    to={'/search'}
                    key={'search'}
                    onClick={() => console.log("Clicked")}
                >
                    <div className='flex justify-center items-center flex-col'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#fff"}} className='pb-1 text-xl'/>
                        <p className='font-semibold'>Search</p>
                    </div>
                </NavLink>
            </div>
        </div>
      </div>
  )
}

export default Navbar