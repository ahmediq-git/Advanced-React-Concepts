import React, {useContext, useEffect} from 'react'
import { AppContext, LoginContext  } from '../../App'
import { useNavigate } from 'react-router-dom'

function Home() {
    const canAccess=useContext(AppContext)
    const user = useContext(LoginContext)
    const navigate=useNavigate()

    useEffect(()=>{
    if (!canAccess.state && !user.state.auth && user.state.designation !=='user'){
            console.log(canAccess)
            navigate('/TransitionFile1')
        }
    },[])
  console.log(user)
  return (
    <div>
       <div>This is the {user.state.designation} page</div>
       <div>Welcome {user.state.user}</div>
       <div>User's message</div>
       <button onClick={()=>{user.loginDispatch({type:'logout'}); navigate('/Home')}}>Logout</button>

    </div>
  )
}

export default Home