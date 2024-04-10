import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Users from './Users'
import UserDetails from './UserDetails'
import { ReadMore } from './ReadMore'





const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About />}> {/* parent route */}
          <Route path='readmore' element={<ReadMore />} /> {/* Nested route/child route */}
        </Route>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:name' element={<UserDetails/>}/>
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