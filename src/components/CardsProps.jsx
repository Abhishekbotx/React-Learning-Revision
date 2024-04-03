import React from 'react'

function CardsProps({values,clickhandler,Index}) {
    const{image,name,Profession,friends}=values;

    
    return (
        <div  >
            {
                <div  className='w-52    bg-slate-50  rounded-md overflow-hidden mr-5'>
                    <div div className='w-full h-32 bg-slate-900 overflow-hidden '>
                        <img className=' h-full w-full object-cover' src={image} alt="" />
                    </div>
                    <div className='w-full p-3'>
                        <h1 className=' font-semibold mb-2'>{name}</h1>
                        <p className=' text-sm text-slate-600'>{Profession}</p>
                    </div>
                    <button onClick={()=>{clickhandler(Index)}} className={`mb-2 ml-3 rounded px-3 py-1 text-white ${friends?'bg-green-600':'bg-blue-500'} font-sans text-sm`}>
                        {friends?'Friends':'Add Friend'}
                    </button>
                </div>
            }
        </div>
    )
}

export default CardsProps

/*
Explaination in /learning/props.jsx
*/