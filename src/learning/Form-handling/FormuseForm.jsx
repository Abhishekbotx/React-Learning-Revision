import { useForm } from "react-hook-form"


function FormuseForm() {
    const {register,handleSubmit} = useForm()
    const onSubmit=(data)=>{// here the data is coming through handlesubmit
        console.log(data);
        alert(JSON.stringify(data))
    }
  return (
    <div  className=' flex justify-center items-center h-screen bg-slate-900'>
        <form onSubmit={handleSubmit(onSubmit)} action="" className='flex gap-2'>
            <input {...register('name')} type="text" placeholder='  name' />
            <input {...register('age',{ min: 18, max: 99 })} type="text" placeholder='   age' />
            <input type="submit" className='bg-blue-600 text-white rounded-md px-3 py-1 ' />
        </form>
    </div>
  )
} 

export default FormuseForm

/*
register have three propeties: ref, onChange, onBlur
*handleSubmit is the is the own function of react-form-hook 

handlesubmit first validates the input and then the onSubmit function is run
*/