import React, { useState } from 'react'

function FormControlledComponent() {
    const[val,setVal]=useState({name:'',email:''})

    const submithandle=(event)=>{
        event.preventDefault()
        console.log(val)
    }


  return (
    <div className=' flex justify-center items-center h-screen bg-slate-900' >
        <form action="" className='flex gap-2'>
            <input onChange={(event)=>setVal({...val,name:event.target.value})} className='px-3'  type="text" placeholder='   name...' />
            <input onChange={(event)=>setVal({...val,email:event.target.value})} type="text" placeholder='   email...' className='px-3' />
            <input onClick={submithandle}  type="submit" value="Submit"  className='bg-blue-600 text-white rounded-md px-3 py-1 '/>
        </form>
    </div>
  )

}

export default FormControlledComponent

/*
    here using useState on every change in any of the input 
    we are updating the state and the val and so then onclick on submit we are 
    printing the val as we need the updated val we can get through state
*/

/*
so now we understood we can handle form by
1.using useRef (targeting and maping via ref key and useref function)
2.Using Controlled Component( using useState on every change)
3.Using the react hook from library
*/