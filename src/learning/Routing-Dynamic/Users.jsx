import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    // <div className=' bg-pink-300 w-1/2 h-40 m-auto flex  flex-col mt-5 px-2 py-4'>
      <div className='w/1 m-auto mt-10 '>
      <div className=' bg-pink-200 w-1/2 h-auto m-auto flex  flex-col mt-5 px-2 py-4'>
        <h1 className=' font-bold text-xl font-sans text-slate-600' >HOME</h1>

        <Link className='p-3 bg-red-400  text-2xl mb-3 hover:bg-red-300 transition-all ' to={'/users/abhi'}>
          ABHISHEK
        </Link>
        <Link className='p-3 bg-red-400  text-2xl mb-3 hover:bg-red-300 transition-all ' to={'/users/rakesh'}>
          RAKESH
        </Link>
        <Link className='p-3 bg-red-400  text-2xl mb-3 hover:bg-red-300 transition-all ' to={'/users/aditya'}>
          ADITYA
        </Link>
        
      </div>
    </div>
    // </div>
  )
}

export default Users