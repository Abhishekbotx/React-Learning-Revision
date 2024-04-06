import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className='  flex gap-5 justify-center mt-5 font-mono  '>
                <NavLink style={(e) => {
                    // console.log(e.isActive)
                    return { 
                        color: e.isActive ? 'tomato' : 'black',
                        fontWeight:e.isActive ?'bold':""
                 }
                }} to="/">Home</NavLink>
                <NavLink style={(e) => {
                    return { 
                        color: e.isActive ? 'tomato' : 'black',
                        fontWeight:e.isActive ?'bold':"" }
                }} to="/About">About</NavLink>
                <NavLink className={(e)=>{
                    return[e.isActive?'text-red-400':"",e.isActive?'font-bold':""].join(' ');
                }} to="/Users">Users</NavLink>
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