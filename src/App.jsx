import React, { useState } from 'react'
import Cards from './components/Cards'
import Musiccard from './components/Musiccard'
import UseState from './learning/Props&useState/UseState'
import UseStateArr from './learning/Props&useState/UseStateArr'
import UseStateBG from './learning/Props&useState/UseStateBG'
import Props from './learning/Props&useState/Props'
import Navbar from './components/Navbar'
import AppjsforMUsicCardpct from './learning/Props&useState/AppjsforMUsicCardpct'
import FormuseRef from './learning/Form-handling/FormuseRef'
import FormControlledComponent from './learning/Form-handling/FormControlledComponent'
import FormuseForm from './learning/Form-handling/FormuseForm'
import FormProject from './learning/Form-handling/FormProject'
import { Link,NavLink,Routes,Route} from 'react-router-dom'
import Home from './learning/Routing/Home'
import About from './learning/Routing/About'
import Users from './learning/Routing/Users'
import Nav from './learning/Routing/Nav'
import Routing from './learning/Routing/Routing'

const App = () => {

  return (

    // <div className='w-full h-screen flex items-center justify-center bg-slate-900'>
    //     <Props > </Props>
    //     <Navbar></Navbar>
    //     <Musiccard></Musiccard>
    // </div> 


    // <div className=' h-screen w-full bg-slate-500'>
    //   <AppjsforMUsicCardpct></AppjsforMUsicCardpct>
    // </div>


    // <div className=' bg-slate-900 h-screen w-full '>
    //   <FormuseRef></FormuseRef>
    // </div>


    // <div className='  '>
    //   <FormControlledComponent></FormControlledComponent>
    // </div>


    // <div className='  '>
    //   <FormuseForm></FormuseForm>
    // </div>

    // <div className='  '>
    //   <FormProject></FormProject>
    // </div>

    <>
      <Nav></Nav>
      

      <Routing></Routing>
      {/* <Routes path='/About' element={About} ></Routes>
      <Routes path='/Users' element={Users} ></Routes> */}
    </>








  )



}

export default App