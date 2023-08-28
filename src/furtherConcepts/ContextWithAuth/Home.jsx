import React, {useContext, useEffect, useState} from 'react'
import { AppContext, LoginContext  } from '../../App'
import { useNavigate } from 'react-router-dom'

function Home() {
    const canAccess=useContext(AppContext)
    const user = useContext(LoginContext)
    const navigate=useNavigate()

    useEffect(()=>{
        if (!canAccess.state){
            console.log(canAccess)
            navigate('/TransitionFile1')
        }
    },[])

    const [userid, setUserId]=useState('')
    const handleLogin = (e) =>{

       if (userid==='admin'){
           user.loginDispatch({type:'login-admin', payload: userid})
           console.log(user)
           navigate('/AdminPage')
           
       } else {
           user.loginDispatch({type:'login-user', payload: userid})
           navigate('/User')
       }
    }

  return (
    <div>
        Please Login
        <input onChange={(e)=>setUserId(e.target.value)}></input>
        <button onClick={handleLogin}>Enter</button>
    </div>
  )
}

export default Home