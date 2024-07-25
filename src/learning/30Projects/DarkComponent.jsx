import React from 'react'
import { useTheme } from '../context/ThemeContext'

const DarkComponent = () => {
    const {isDarkMode}=useTheme()
  return (
    <div className={`${isDarkMode?'bg-slate-800 text-white h-screen w-full ':''}`}>
        <h1 className='px-6 text-2xl py-6'>Hello How Are you</h1>
    </div>
  )
}

export default DarkComponent