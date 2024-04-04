import React from 'react'

function MusicCard2({data,Index,clickhandler}) {
  const {image,Name,Added,Artist}=data
  return (
    <div className='flex relative gap-3 px-5 justify-between   bg-slate-100 w-60  h-32 m-4 rounded-md'>
      <div className=' mt-4 bg-orange-500 h-20 w-24 rounded-md  overflow-hidden'> 
      <img src={image} alt="" />
      </div>
      <div className='mt-4'>
        <h1 className=' text-lg font-sans'>{Name}</h1>
        <p className=' text-xs'>{Artist}</p>
      </div>
      <button onClick={()=>clickhandler(Index)} className={`${Added?'bg-teal-500 px-10':'bg-orange-500'}  whitespace-nowrap rounded-2xl absolute  -bottom-7 left-1/2  -translate-x-[50%] -translate-y-[50%]  text-sm text-white py-1 px-3`}>{Added?'Added':'Add to favourites'}</button>
    </div>
  )
}

export default MusicCard2