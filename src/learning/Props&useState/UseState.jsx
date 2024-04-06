import React ,{useState}from 'react'


// function UseState() {
//     const[a,b]=useState(0)
//   return (
//     <div className=' ml-4 mt-4'>
//         <p className=''>{a}</p>
//         <button onClick={()=>{b((prev)=>prev+1)}} className='px-4 py-2 text-white rounded-md bg-blue-600 '>Button</button>
//     </div>
//   )
// }


// function UseState() {
//     const[val,setVal]=useState(true)
//   return (
//     <div className=' ml-4 mt-4'>
//         <p className=''>{val.toString()}</p>
//         <button onClick={()=>{setVal(!val)}} className='px-4 py-2 text-white rounded-md bg-blue-600 '>Button</button>
//     </div>
//   )
// }



// function UseState() {
    
//     const[val,setVal]=useState({name:"Abhi",isBanned:false});
//     const ban=()=>{
//         setVal({...val,isBanned:!val.isBanned})
//     }
//   return (
//     <div className=' ml-4 mt-4'>
//         <h1 className=''>{val.name}</h1>
//         <h2 className=''>{val.isBanned.toString()}</h2>
//         <button onClick={ban} className='px-4 py-2 text-white rounded-md bg-blue-600 '>Button</button>
//     </div>
//   )
// }



// Toggle-button-color change on True&False⏬
// function UseState() {
    
//     const[val,setVal]=useState({name:"Abhi",isBanned:false});
//     const ban=()=>{
//         setVal({...val,isBanned:!val.isBanned})
//     }
//   return (
//     <div className=' ml-4 mt-4'>
//         <h1 className=''>{val.name}</h1>
//         <h2 className=''>{val.isBanned.toString()}</h2>
//         <button onClick={ban} className={`px-4 py-2 text-white rounded-md ${val.isBanned? 'bg-blue-600':'bg-red-600'} `}>Button</button>
//     </div>
//   )
// }

// toggle-text-color App  ⏬

// function UseState() {
    
//         const[col,setColor]=useState('red');
//         const ban=()=>{
//             setColor(col=='red'?'orange':'red' || col=='orange'?'red':'orange')
//         }
//       return (
//         <div className=' ml-4 mt-4 text-white'>
//             <h1  className={` text-4xl ${col=='red'?'text-red-600':'text-orange-400'} `}>{col}</h1>
            
//             <button onClick={ban} className='px-4 py-2  rounded-md bg-blue-600 mt-3'>Change Color</button>
//         </div>
//       )
//     }


// Counter App ⏬
function UseState() {
    const[val,setVal]=useState(0)
    function increase(){
        setVal(val+1)    //or setVal((prev)={prev+1})
    }

    function decrease(){
        setVal(val-1)
    }
  return (
    <div className=' w-full h-screen flex justify-center items-center bg-[#344151]  gap-10'>
    <button onClick={decrease} className='px-4 py-2 text-white rounded-md bg-blue-600'>-</button>
    <p className=' text-2xl text-white'>{val}</p>
    <button onClick={increase} className='px-4 py-2 text-white rounded-md bg-blue-600'>+</button>
  </div>
  )
}




export default UseState