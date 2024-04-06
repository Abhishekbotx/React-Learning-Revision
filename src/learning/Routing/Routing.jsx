import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Users from './Users'

const Routing = () => {
  return (
    <>
    <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Users" element={<Users/>}/>
    </Routes>
    </>
  )
}

export default Routing