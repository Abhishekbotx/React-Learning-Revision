import React from 'react'
import {useNavigate} from 'react-router-dom'
export const ReadMore = () => {
    const navigate=useNavigate()
    const clickhandle=()=>{
// navigate('/users')//will redirect to /users reactrouter-dom provides usenavigate for buttons
        navigate(-1)//thil also works mean 1 peeche chle jao
    }
  return (
    <div className='mt-4 p-2 h-auto w-1/2 m-auto bg-red-100'>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi atque dolore totam architecto molestias expedita, illo possimus, ipsa voluptate non odio sit commodi iusto, minima harum alias beatae aspernatur aperiam. Ab vitae illum quo, perspiciatis reprehenderit excepturi blanditiis voluptate nemo veniam aliquid, itaque ducimus ipsam enim laudantium modi earum minus saepe maiores! A incidunt ratione, eveniet voluptatem sequi debitis numquam doloremque neque blanditiis ea ducimus expedita tempora omnis magni modi excepturi asperiores atque repudiandae fuga temporibus consequatur eaq
        </p>
        <button onClick={clickhandle} className=' bg-orange-400 w-24 py-1 mt-2 ' >Read less</button>
        
    </div>
  )
}
