import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({formsubmithandler}) => {
    const{register,handleSubmit}=useForm();
    const handlesubmitform=(data)=>{
        console.log(data);

        formsubmithandler(data)
    }
  return (
    
    <div className='flex gap-3'>
      <form className='flex gap-3' onSubmit={handleSubmit(handlesubmitform)}>
        <input {...register('email')} type="text" placeholder='  email ...'  className='rounded-md'/>
        <input {...register('about')} type="text" placeholder='  about...'  className='rounded-md'/>
        <input {...register('image')} type="text" placeholder='  image...' className='rounded-md' /> 
        <input type="submit" name="" id=""  className='bg-red-500 rounded-md px-4 py-1'/> 
      </form>
    </div>
  )
}

export default Form