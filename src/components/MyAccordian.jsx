import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, } from '@fortawesome/free-solid-svg-icons';
import './../index.css'; 

const MyAccordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  
  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div className='mb-8 border-0 p-6 rounded-md shadow-md transform transition-all ease-in-out duration-700'>
      <div className='flex justify-between mb-2 items-center'>
        <h3 className='text-2xl'>{question}</h3>
        <p className='hover:cursor-pointer text-yellow-300' onClick={showHandler}>
          {show ? <FontAwesomeIcon icon={faChevronUp} className='border  rounded-full p-2 bg-zinc-100 shadow-md' style={{color: "#4a3aff", fontSize:'1.2rem'}} /> : <FontAwesomeIcon className='border  rounded-full p-2 bg-zinc-100  shadow-md' icon={faChevronDown} style={{color: "#4a3aff", fontSize:'1.2rem'}} />}
        </p> 
      </div>
      <div className={`answer ${show ? 'show' : 'hide'}`}>
        <p className='text-lg leading-4 text-slate-600'>{answer}</p>
      </div>
    </div>
  );
};

export default MyAccordian;
