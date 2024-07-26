import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
    const [password, setPassword] = useState('')
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const passwordRef = useRef(null);

    const copyToClipBoard = () => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    }

    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += '0123456789'
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

        for (let i = 1; i <= length; i++) {
            const char = Math.floor(Math.random() * str.length) + 1
            pass += str.charAt(char)
            console.log('pass', pass);

        }
        console.log('password:', pass);
        // console.log('act pass', password);
        return setPassword(pass)

    }, [numberAllowed, charAllowed, length])
    useEffect(() => {
        passwordGenerator()
    }, [numberAllowed, charAllowed, length, passwordGenerator])
    return (
        <div className=' bg-slate-700 w-full h-screen flex flex-col justify-center'>
            <div className='  flex justify-center items-center'>
                <input type="text" readOnly className='px-5 w-56 py-2 text-gray-800 outline-none  bg-white rounded-l-md text-2xl' ref={passwordRef} value={password} />
                <div onClick={copyToClipBoard} className='py-2 px-6 hover:cursor-pointer text-white bg-blue-400 uppercase rounded-r-md text-2xl'>copy</div>

            </div>
            <div className=' flex gap-x-5 justify-center mt-4'>
                <div className='flex gap-x-4 items-center'>
                    <input type="checkbox" onChange={()=>setCharAllowed(!charAllowed)} className='h-4 w-4  ' id='charAllow' />
                    <label htmlFor="charAllow">Allow Character</label>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <input type="checkbox" onChange={()=>setNumberAllowed(!numberAllowed)} className='h-4 w-4  ' id='numberAllow' />
                    <label htmlFor="numberAllow">Allow Numbers</label>
                </div>
            </div>

        </div>

    )
}

export default PasswordGenerator