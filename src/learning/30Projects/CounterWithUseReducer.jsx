import React, { useReducer } from 'react'

const CounterWithUseReducer = () => {
    const initialstate = 0
    
    const reducer = (state, action) => {
        if (action.type === 'Inc') {
            return state + 1;
        }
        if (action.type === 'Dec') {
            return state - 1;
        }

        return state

    }
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
        <div className='bg-slate-700 w-full flex h-screen justify-center items-center'>
            <button className='px-5 py-1' onClick={() => dispatch({ type: 'Inc' })}>+</button>
            <p>{state}</p>
            <button className='px-5 py-1' onClick={() => dispatch({ type: 'Dec' })}>-</button>
        </div>
    )
}

export default CounterWithUseReducer