import React from 'react'

const FormCard = ({items,Id,removeHandler}) => {
    const{email,about,image}=items
  return (
    <div className='h-40 w-36 bg-slate-100 flex flex-col items-center   rounded-md px-2'>
        <div className='h-[4vw] w-[4vw]  overflow-hidden rounded-full mt-2'>
            <img src={image} alt="" />
        </div>
        <p className=' text-sm text-slate-400 font-bold'>{email}</p>
        <p className=' text-xs text-center text-slate-800 '>{about}</p>
        <button onClick={()=>removeHandler(Id)} className=' bg-red-600 text-white px-3 py-0.25  rounded-md mt-1' >Remove</button>
    </div>
  )
}

export default FormCard