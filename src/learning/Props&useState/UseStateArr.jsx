import React,{useState} from 'react'

// Deleting /Poping element from last⏬
// function UseStateArr() {
//     const[val, setVal]=useState([1,2,3,4,5,6])
//     const del=()=>{
//         setVal(val.filter((item,index)=>{return index < val.length-1}))
//     }
//     return (
//       <div className=' h-screen w-full text-white flex  flex-col justify-center items-center  bg-slate-700   gap-10'>
//         {val.map((item) => {
//             return <h1>{item}</h1>
//         })}
//         <button onClick={del} className='px-4 py-2 text-white rounded-md bg-blue-600'>click me</button>

//       </div>
//   )
// }


//Deleting /Poping element of our choice⏬
// function UseStateArr() {
//     const[val, setVal]=useState([1,2,3,4,5,6])
//     const del=()=>{
//         setVal(val.filter((item,index)=>{return index !=2}))//deleting 3rd element
//     }
//     return (
//       <div className=' h-screen w-full text-white flex  flex-col justify-center items-center  bg-slate-700   gap-10'>
//         {val.map((item) => {
//             return <h1>{item}</h1>
//         })}
//         <button onClick={del} className='px-4 py-2 text-white rounded-md bg-blue-600'>click me</button>

//       </div>
//   )
// }


//Changing age of aperson on a click⏬
function UseStateArr() {
    const[val, setVal]=useState([
        {name:"Abhishek",age:22},
        {name:"Yuvraj",age:23},
        {name:"Rahul",age:24}
    ])
    const del=()=>{
        setVal(val.map((item,index)=>{return item.name==='Rahul'?{...item,age:26}:item}))
    }                              //or item.name==='Rahul'?{name:"Rahul",age:26}:item
    return (
      <div className=' h-screen w-full text-white flex  flex-col justify-center items-center  bg-slate-700   gap-10'>
        {val.map((item) => (
             <div className='flex gap-2'>
             <h1>{item.name}</h1>
             <h2>{item.age}</h2>
             </div>
        ))}
        <button onClick={del} className='px-4 py-2 text-white rounded-md bg-blue-600'>click me</button>

      </div>
  )
}

export default UseStateArr

