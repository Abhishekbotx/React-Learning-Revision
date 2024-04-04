import React from 'react'

function Navbar({Data}) {
  return (
    <div className=' bg-transparent flex justify-between items-center py-4 px-7'>
        <h1 className=' text-white bg-teal-600 rounded-md py-1 px-4'>MusicVox</h1>
        <div className='bg-orange-600 gap-1 flex rounded-md text-white  py-1 px-5'>
          <h2>Favourites: </h2> 
          <h3>{Data.filter((item)=>item.Added).length}</h3>
        </div>
    </div>
  )
}

export default Navbar