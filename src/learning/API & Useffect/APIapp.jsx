import React from 'react'
import { Routes, Route } from 'react-router-dom'



import Routing from './Routing'
import Nav from './Nav'

const APIapp = () => {
    return (
        <div className='bg-slate-800 h-full min-h-screen' >
            <Nav ></Nav>
            
            <Routing></Routing>
            




        </div>
    )
}

export default APIapp