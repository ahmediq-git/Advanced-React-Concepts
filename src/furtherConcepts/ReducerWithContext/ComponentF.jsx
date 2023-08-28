import React, {useContext} from 'react'
import { CountContext } from './AppReducer'

function ComponentF() {
  const counter = useContext(CountContext)

  return (
    <>  
        <div>ComponentF count: {counter.count}</div>
        <button onClick={()=>counter.dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>counter.dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>counter.dispatch({type:'reset'})}>Reset</button>

    </>
  )
}

export default ComponentF