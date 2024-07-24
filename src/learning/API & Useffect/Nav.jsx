import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className='flex justify-center  text-2xl gap-5  pt-5 font-mono  '>

                <NavLink style={(e) => {
                    // console.log(e.isActive)
                    return { 
                        color: e.isActive ? 'tomato' : 'white',
                        fontWeight:e.isActive ?'bold':""
                 }
                }} to="/">Home</NavLink>

                {/* <NavLink to={'/courses'} style={(e)=>{
                    return {color:e.isActive?'tomato':'',fontWeight:e.isActive?'bolder':''}
                }}>Courses</NavLink> */}

                <NavLink style={(e) => {
                    `color: e.isActive ? 'tomato' : 'white',
                        fontWeight:e.isActive ?'bold':"" `
                }} to="/service">Services</NavLink>
                <NavLink className={(e)=> `${e.isActive?'text-red-500 font-bold':"text-white"}`
                    
                } to="/show">Show</NavLink>
            </nav>
        </>
    )
}

export default Nav


/* 🍁style only works with Navlink; It accepts a callback;
    And also u need to return in curly braces 
    eg:return {color:e.isActive?'tomato':'black'}

    The argument in the callback return boolean isActive property

*/