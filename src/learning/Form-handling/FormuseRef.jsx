import React, { useRef } from 'react'

function FormuseRef() {
    const name=useRef(null)
    const age=useRef(null)
    const handleclick=(event)=>{
        event.preventDefault();
        console.log(name)
        // console.log(name.current)

        console.log('name:age',name.current.value,'age:',age.current.value)

    }
  return (
    <div className=' flex justify-center items-center h-screen' >
        <form action="" className='flex gap-2'>
            <input ref={name} type="text" placeholder='name...' />
            <input ref={age} type="text" placeholder='age...' />
            <input onClick={handleclick}  type="submit" value="Submit"  className='bg-blue-600 text-white rounded-md px-3 py-1 '/>
        </form>
    </div>
  )
}

export default FormuseRef

/*
useRef mein initially value null deni hoti hai kyuki useref pehle chlta hai and tab tak
elements render nhi hote that's why initially null

and useref wale object ko link krna hota hai ref property se tb hum uss 
element ko target kr  payenge
*/