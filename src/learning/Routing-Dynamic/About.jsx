import React from 'react'
import { useNavigate,Outlet } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()
  const handleclick = () => {

    navigate('/about/readmore')
  }
  return (

    <div className='flex flex-col  items-center'>
      <div className=' bg-pink-400 w-1/2 h-40 m-auto flex  flex-col mt-5 px-2 py-4'>
        <h1 className=' font-bold text-xl font-sans text-slate-600' >ABOUT</h1>
        <p className=' text-sm  text-slate-100 mt-1'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.consectetur adipisicing elit. Doloribus amet inventore voluptatibus. Eos ad doloribus expedita, sed reiciendis nulla quasi quam aspernatur autem animi est architecto ab odio at quis fuga </p>
        <button className=' bg-orange-400 w-24 py-1 mt-2' onClick={handleclick}>Read More</button>
      </div>
      <hr  className='mt-4 w-1/2  '/>
      <Outlet/>
    </div>
  )
}

export default About