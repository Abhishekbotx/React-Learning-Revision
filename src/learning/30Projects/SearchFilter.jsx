import React, { useState } from 'react'

const SearchFilter = () => {
    const items = [
        'Item1', 'Item2', 'Teleproduct', 'Television', 'Laptop', 'Remote', 'Keyboard', 'Keypress'
    ]
    const [searchTerm,setSearchTerm]=useState('')
    const filterProducts=items.filter((item)=>{
        return item.toLowerCase().includes(searchTerm.toLowerCase())
    })
    console.log('filtered products:',filterProducts);

    
    return (
        <div className='bg-slate-600 w-full h-screen p-8' >
            <input type="text" className='rounded-md px-3 py-1'  onChange={(e)=>setSearchTerm(e.target.value)} />
            {filterProducts.map((item,index)=>{
                return <ul key={index}>{item}</ul>
            })}
        </div>
    )
}

export default SearchFilter