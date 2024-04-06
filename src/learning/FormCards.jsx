import React from 'react'
import FormCard from './FormCard'

const FormCards = ({users,removecardhandler}) => {
  return (
    <divc className='flex gap-4 h-72 overflow-auto justify-center   px-3 py-3 flex-wrap'>
        {users.map((item,index)=>{
           return <FormCard removeHandler={removecardhandler} items={item} key={index} Id={index} className=''></FormCard>
        })}

    </divc>
  )
}

export default FormCards