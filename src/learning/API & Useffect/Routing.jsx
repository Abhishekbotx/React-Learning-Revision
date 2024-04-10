import React from 'react'
import {Routes,Route} from 'react-router-dom'



import Services from './Services'
import Home from './Home'
import Show from './Show'





const Routing = () => {
  return (
    <>
    <Routes>
         <Route path='/' element={<Home></Home>}></Route> 
         <Route path='/service' element={<Services />} /> 
         <Route path='/show' element={<Show />} /> 

    </Routes>
    </>
  )
}

export default Routing

/*
<Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Users" element={<Users/>}/>
    </Routes>
*/