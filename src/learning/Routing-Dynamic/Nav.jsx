import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className=' flex justify-center gap-3    '>

                <NavLink style={(e) => {
                    // console.log(e.isActive)
                    return { 
                        color: e.isActive ? 'tomato' : 'black',
                        fontWeight:e.isActive ?'bold':""
                 }
                }} to="/">Home</NavLink>

                {/* <NavLink to={'/courses'} style={(e)=>{
                    return {color:e.isActive?'tomato':'',fontWeight:e.isActive?'bolder':''}
                }}>Courses</NavLink> */}

                <NavLink style={(e) => {
                    return { 
                        color: e.isActive ? 'tomato' : 'black',
                        fontWeight:e.isActive ?'bold':"" }
                }} to="/about">About</NavLink>
                <NavLink 
                className={(e)=>`${e.isActive?'text-red-400 font-extrabold  font-mono':'text-black'}`}
                to="/users">Users</NavLink>
            </nav>
        </>
    )
}

export default Nav

//🍁best way to style navlink⬇️
//  className={(e)=>`${e.isActive?'text-red-400 font-extrabold  font-mono':'text-black'}`}

/* 🍁style only works with Navlink; It accepts a callback;
    And also u need to return in curly braces 
    eg:return {color:e.isActive?'tomato':'black'}

    The argument in the callback return boolean isActive property

*/