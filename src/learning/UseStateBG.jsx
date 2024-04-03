import React, { useState } from 'react'
import { BsArrowRight } from "react-icons/bs";

function UseStateBG() {
    const[val,setVal]=useState(false)
    const change=()=>{
        setVal(()=>!val)
        
    }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-800'>
        <div className='relative w-60  h-32  flex rounded-md overflow-hidden'>
        <img className={` transition-transform duration-500 ease-in-out   shrink-0 ${val?'-translate-x-[100%]':'translate-x-[0%]'} w-full h-full object-cover `}  src="https://images.unsplash.com/photo-1553808353-a19d11a030b1?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
        <img  className={` transition-transform duration-700 ease-in-out shrink-0 ${val?'-translate-x-[100%]':'translate-x-[0%]'} w-full h-full object-cover `} src="https://plus.unsplash.com/premium_photo-1706625686140-0e12f6d34bd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span onClick={change} className=' opacity-50 bg-slate-400 rounded-2xl p-1  absolute -translate-x-[50%] -translate-y-[0%] left-1/2 top-1/2  '>
            <BsArrowRight className=' size-6 ' />
        </span>
         </div>
    
    </div>
  )
}

export default UseStateBG
/*
Logic:
Here we have set both the images which has flex property by default row so they are side ways;
Also we have set  the shrink toh zero so that  each image have full view or not getting shrinked

Then the logic is when the val==true then 
the translate is set 100% in negative x-direction and when false make it 0%
*/