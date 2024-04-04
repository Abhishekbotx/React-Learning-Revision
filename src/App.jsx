import React,{useState} from 'react'
import Cards from './components/Cards'
import Musiccard from './components/Musiccard'
import UseState from './learning/UseState'
import UseStateArr from './learning/UseStateArr'
import UseStateBG from './learning/UseStateBG'
import Props from './learning/Props'
import Navbar from './components/Navbar'
import AppjsforMUsicCardpct from './learning/AppjsforMUsicCardpct'

const App = () => {

  return (
    
      // {/* <div className='w-full h-screen flex items-center justify-center bg-slate-900'>
      //     <Props > </Props>
      //     <Navbar></Navbar>
      //   <Musiccard></Musiccard>
      // </div> */}
      <div className=' h-screen w-full bg-slate-500'>
        
        <AppjsforMUsicCardpct></AppjsforMUsicCardpct>
        
      </div>
      
        

      
        
    
      

    
  )
  
    
  
}

export default App