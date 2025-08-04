import React from 'react'
import { Link } from 'react-router-dom' 
const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between items-center bg-blue-700 text-white py-5 px-14'>
            <h1 className='text-2xl font-bold'>Excel Analytics</h1>    
            <ul className='flex space-x-10 items-center'>
                <li><Link to="/dashboard">Dashboard</Link></li>   
                <li><Link to="/">History</Link></li>
                <li><Link to="/upload" className='bg-white text-blue-700 rounded-full px-6 py-2.5 cursor-pointer'>Upload</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
