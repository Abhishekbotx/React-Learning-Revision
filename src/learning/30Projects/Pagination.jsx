import React, { useState } from 'react'

const Pagination = () => {
    const items = [
        'Item1', 'Item2', 'Teleproduct', 'Television', 'Laptop', 'Remote', 'Keyboard', 'Keypress'
    ]
    const [currentPage,setCurrentPage]=useState(1)
    const itemsPerpage=3
    const indexOfLastItem=itemsPerpage*currentPage;//[0,3,6]
    const IndexOfFirstItem=indexOfLastItem-itemsPerpage;//[3,6,9]
    console.log('index of first and last:',IndexOfFirstItem,indexOfLastItem);
    const currentItems=items.slice(IndexOfFirstItem,indexOfLastItem);
    console.log('currentItems:',currentItems);
    console.log('math ceil:',Math.ceil(items.length/ itemsPerpage));

    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(items.length/ itemsPerpage);i++){
        pageNumbers.push(i)
    }
  return (
    <div className='bg-slate-700 h-screen w-full p-8'>
        <div className='text-white min-h-24'>
            {currentItems.map((item,i)=>{
               return <ul key={i} className='text-2xl'>{item}</ul>
            })}
        </div>
        <div className='flex gap-x-8 gap-y-2 text-white pt-8'>
            {pageNumbers.map((number,index)=>{
                return <li key={index} className=' cursor-pointer list-none hover:scale-125 transition-transform duration-200 ease-in-out' onClick={(e)=>setCurrentPage(number)}>{number}</li>
            })}
        </div>
    </div>
  )
}

export default Pagination