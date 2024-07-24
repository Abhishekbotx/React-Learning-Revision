import React, { useState } from 'react'
import { questions } from './Api'
import MyAccordian from './MyAccordian'
import './../index.css'
const Accordian = () => {
    const [data, setData] = useState(questions)
    return (<div className='bg-white text-black flex justify-center'>
        <section className='w-[50vw]'>
            <h1 className='text-black text-3xl  mb-16'>Frequently Asked Questions</h1>
            {
                data.map((currElem) => {
                    const { id } = currElem
                    return <MyAccordian key={id} {...currElem}></MyAccordian>
                })
            }
        </section>

    </div>)
}

export default Accordian