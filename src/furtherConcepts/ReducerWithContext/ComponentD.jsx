import React, {useContext} from 'react'
import { CountContext } from './AppReducer'

function ComponentD() {
  const counter = useContext(CountContext)

  return (
    <>  
        <div>ComponentD count: {counter.count}</div>
        <button onClick={()=>counter.dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>counter.dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>counter.dispatch({type:'reset'})}>Reset</button>

    </>
  )
}

export default ComponentD