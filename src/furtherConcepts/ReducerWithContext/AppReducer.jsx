import React, {useReducer} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

// One more benefit is that you don't have to pass every individual function, you have to just pass the dispatch so that is nice
const initialState=0
const reducer =(state, action)=>{
    switch(action.type){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const CountContext = React.createContext()

function AppReducer() {
  const [count, dispatch]=useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{count: count, dispatch:dispatch}}>
        Count: {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
    </CountContext.Provider>
  )
}

export default AppReducer


// A B C
// D   E
//     F