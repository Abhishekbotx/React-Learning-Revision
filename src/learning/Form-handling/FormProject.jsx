import React, { useState } from 'react'
import FormCards from './FormCards'
import Form from './Form'

const FormProject = () => {
    const [user,setUser]=useState([])
    const formsubmithandle=(data)=>{
      
        return setUser( [...user,data] )
    };

    const removecardhandle=(id)=>{
      return setUser(()=>user.filter((item,index)=>id!=index))
    }

    
  return (
    <div className='h-screen w-full flex flex-col gap-5  items-center bg-slate-900 '>
        <FormCards users={user} removecardhandler={removecardhandle} ></FormCards>
        <Form formsubmithandler={formsubmithandle}>Form</Form>
    </div>
    
  )
}

export default FormProject