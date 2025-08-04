import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex min-h-svh gap-5'>
      <aside className='bg-blue-200 w-[15%]'>
        <h1 className='px-5 text-xl font-bold text-blue-800 py-2'>Dashboard</h1>
        <ul className='px-5'>
            <li className='py-2'>Login</li>
            <li className='py-2'>Register</li>
            <li className='py-2'>Admin</li>
            <li className='py-2'>User</li>
        </ul>
      </aside>
      <div className='bg-gray-100 w-[85%]'>
        
      </div>
    </div>
  )
}

export default Dashboard
