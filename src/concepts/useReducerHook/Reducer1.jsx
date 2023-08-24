import React, {useReducer} from 'react'

// useReducers are used for state management in react and the useState hook is built from useReducer
const initialState=0
const reducer = (state, action)=>{
    switch(action){
        case "increment":
            return state+1
        case "decrement":
            return state-1
        case "reset":
            return initialState
        default:
            return state;
    }
}

function Reducer1() {   

  const [count,dispatch]=useReducer(reducer, initialState)
  const [count2,dispatchTwo]=useReducer(reducer, initialState)

  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>dispatch("increment")}>+</button>
        <button onClick={()=>dispatch("decrement")}>-</button>
        <button onClick={()=>dispatch("reset")}>reset</button>

        <div>{count2}</div>
        <button onClick={()=>dispatchTwo("decrement")}>-</button>
        <button onClick={()=>dispatchTwo("increment")}>+</button>
        <button onClick={()=>dispatchTwo("reset")}>reset</button>
        <br/>
        <div></div>
    </div>
  )
}

export default Reducer1