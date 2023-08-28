import React, { useContext } from 'react'
import App from './furtherConcepts/ContextClasses/App'
import AppHooks from './furtherConcepts/ContextHooks/AppHooks'
import AppReducer from './furtherConcepts/ReducerWithContext/AppReducer'
import { AppContext, LoginContext } from './App'
import {useNavigate} from 'react-router-dom'



function TransitionFile3(){
    const canAccess=useContext(AppContext)
    const navigate= useNavigate()

    const handleAccess = ()=>{
        canAccess.accessDispatch({type:'access'})
        navigate('/Home')
    }

    return (
      <>
      <h3>Context with classes</h3>
      <App/>
      <h3>Context with Hooks and functions</h3>
      <AppHooks/>
      <h3>Context with useReducer</h3>
      <AppReducer/>
      <h3>Context with Auth</h3>
      <button onClick={handleAccess}>Enter the app</button>
      </>
    )
}


export default TransitionFile3