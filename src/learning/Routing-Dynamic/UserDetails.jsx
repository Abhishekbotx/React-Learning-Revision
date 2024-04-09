import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
//use Params for dynamic data
const UserDetails = () => {
    const navigate=useNavigate()
    const clickhandle=()=>{
// navigate('/users')//will redirect to /users reactrouter-dom provides usenavigate for buttons
        navigate(-1)//thil also works mean 1 peeche chle jao
    }
    const {name}=useParams()//the key here is->name we have given on routing page as /users/:name
    // console.log(d)  //will return {name:Abhishek} //earlier {name } was d
    
  return (
    <div className=' bg-pink-200 w-1/2 h-40 m-auto flex  flex-col mt-5 px-2 py-4'>
      <h1 className=' font-bold text-2xl mt-3  font-mono font-ans text-red-400 ' >User Details</h1>
      <p className='  text-xl font-mono text-teal-600 mt-1'>Hii! {name}</p>
      <button onClick={clickhandle} className=' bg-orange-400 w-24 py-1 mt-2'>Go Back</button>
    </div>
  )
}

export default UserDetails