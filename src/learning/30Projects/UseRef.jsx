import React, { useEffect, useRef, useState } from 'react'

const UseRefLearning = () => {
    const[inputval,setInputval]=useState('')
    const count=useRef(0)
    const previousInputValue=useRef('')
    const inputFocus=useRef()

    const focus=()=>{
        inputFocus.current.focus()
    }
    useEffect(() => {
        count.current = count.current + 1;
        
      });
    useEffect(() => {
      console.log("Re Rendering runs",previousInputValue.current);
        previousInputValue.current = inputval;
        console.log("Re Rendering runs",previousInputValue.current);

      },[inputval]);
      console.log("render ");
  return (
    <div className='bg-slate-700 w-full  h-screen px-4 oy-3'>
        <input type="text" className='my-2 px-6' ref={inputFocus} onChange={(e)=>setInputval(e.target.value) } value={inputval}/>
        <div className='text-white'>count:{count.current}</div>
        <div className='text-white'>rightNow:{ inputval}</div>
        <div className='text-white'>previous:{previousInputValue.current}</div>
        <button className='rounded-md py-2 px-5 bg-blue-400 text-white' onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRefLearning