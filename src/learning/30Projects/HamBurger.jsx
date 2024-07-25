import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
const HamBurger = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpening = () => {

        return setIsOpen(!isOpen)
    }
    console.log(isOpen);
    return (
        <div className='p-12 pt-6 text-white bg-slate-700 h-screen'>
            <div className='text-2xl mb-4 lg:hidden transition-all duration-1000 delay-500 ease-in-out' onClick={handleOpening}>
                {isOpen?<IoCloseOutline />:<GiHamburgerMenu  />}
                
                
            </div>
            <ul className={`text-lg lg:block lg:bg-transparent bg-red-300    p-4 ${isOpen?'block transition-all duration-1000 delay-0 ease-in-out':'hidden transition-all duration-1000 delay-0 ease-in-out'} `} >
                <li>Home</li>
                <li>Content</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Guide</li>
            </ul>
        </div>
    )
}

export default HamBurger