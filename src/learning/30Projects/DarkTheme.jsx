import React from 'react'
import { useTheme } from '../context/ThemeContext'

const DarkTheme = () => {
    const {isDarkMode,toggleDarkMode}=useTheme()
    console.log('isdarkmode:',isDarkMode);
  return (
    <div className='p-10'>
        <label htmlFor="check " className='text-4xl'>
            
            <input type="checkbox" className='h-10 w-10' id='check' checked={isDarkMode} onChange={toggleDarkMode}/>
            DarkMode
        </label>
    </div>
  )
}

export default DarkTheme