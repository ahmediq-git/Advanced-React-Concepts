import React, {useContext, useEffect} from 'react'
import { AppContext, LoginContext  } from '../../App'
import { useNavigate } from 'react-router-dom'

function AdminPage() {
    const canAccess=useContext(AppContext)
    const user = useContext(LoginContext)
    const navigate=useNavigate()

    useEffect(()=>{
        console.log(user)
        if (!canAccess.state && !user.state?.auth && user.state.designation !=='admin'){
            console.log(canAccess)
            navigate('/TransitionFile1')
        }
    },[])

  return (
    <div>
        <div>This is the admin page</div>
        <div>Welcome Admin!</div>

        <button onClick={()=>{user.loginDispatch({type:'logout'}); navigate('/Home')}}>Logout</button>
    </div>
  )
}

export default AdminPage