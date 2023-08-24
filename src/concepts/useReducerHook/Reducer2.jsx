import React, {useReducer} from 'react'

// useReducers are used for state management in react and the useState hook is built from useReducer
const initialState= {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state, action)=>{
    switch(action.type){
        case "increment":
            return {...state, firstCounter: state.firstCounter+1}
        case "decrement":
            return {...state, firstCounter: state.firstCounter-1}
        case "increment 5":
            return {...state, firstCounter: state.firstCounter+action.value}
        case "decrement 5":
            return {...state, firstCounter: state.firstCounter-action.value}
        case "increment second counter":
            return {...state, secondCounter: state.secondCounter+1}
        case "decrement second counter":
            return {...state, secondCounter: state.secondCounter-1}
        case "reset":
            return initialState
        default:
            return state;
    }
}

function Reducer2() {   

  const [count,dispatch]=useReducer(reducer, initialState)

  return (
    <div>
        <div>First Counter {count.firstCounter}</div>
        <div>Second Counter {count.secondCounter}</div>

        <button onClick={()=>dispatch({type: "increment", value:1})}>+</button>
        <button onClick={()=>dispatch({type: "decrement", value: 1})}>-</button>
        <button onClick={()=>dispatch({type: "increment 5", value: 5})}>+5</button>
        <button onClick={()=>dispatch({type: "decrement 5", value: 5})}>-5</button>
        <button onClick={()=>dispatch({type: "reset"})}>reset</button>
        <div>Second Counter Buttons</div>
        <button onClick={()=>dispatch({type: "increment second counter", value:1})}>+</button>
        <button onClick={()=>dispatch({type: "decrement second counter", value: 1})}>-</button>


    </div>
  )
}

export default Reducer2