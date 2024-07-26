import React, { useReducer } from 'react'
/*
🍁useReducer is optimised version of useState in bigger projectss we use useReducer
  in the syntax we have
  1.state which is similar to useState 1st arg return which holds initialstate
  2.The dispatch method is similar as well it is the 2nd arg which is returned
  3.reducer is the function which is new here which handles all the stuffs what to do with
    initialState eg;increment,decrement,etc;
    
  4.initialSTate is something to initialize similar to useState  
*/

const UseReducerLearning = () => {
    const initialState=0;
    const reducer=(state,action)=>{
        if(action.type==='INC'){
            return state + 1;
        }
        if(action.type==='DEC'){
            return state - 1;
        }
        if(action.type==='RES'){
            return state = 0
        }
        // console.log();
        return state
    }
    const [state,dispatch]=useReducer(reducer,initialState)
    // const [state, dispatch] = useReducer(first, second, third)
  return (
    <div className='flex items-center justify-center flex-col w-full  h-screen bg-slate-700 text-white'>
        <p>{state}</p>
        <div className='flex gap-x-3 '>
        <button className='px-5 py-2 bg-blue-400 text-white rounded-md' onClick={()=>dispatch({type:'INC'})}>Add</button>
        <button className='px-5 py-2 bg-blue-400 text-white rounded-md' onClick={()=>dispatch({type:'DEC'})}>Sub</button>
        <button className='px-5 py-2 bg-blue-400 text-white rounded-md' onClick={()=>dispatch({type:'RES'})}>Reset</button>
        </div>
    </div>
  )
}

export default UseReducerLearning