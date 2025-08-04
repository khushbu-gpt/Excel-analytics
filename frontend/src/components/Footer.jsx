import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-4 mt-10 fixed bottom-0 w-full">
        <div className="container mx-auto text-center"> 
            <p className="text-sm">© {new Date().getFullYear()} Excel Analytics. All rights reserved.</p>
            <p className="text-sm">Created by  <i className='text-blue-300'>Khushbu</i></p>
        </div>  
    </footer>
  )
}

export default Footer
