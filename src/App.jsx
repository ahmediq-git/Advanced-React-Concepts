import React, {useReducer} from 'react';
import TransitionFile1 from './TransitionFile1';
import TransitionFile2 from './TransitionFile2';
import TransitionFile3 from './TransitionFile3';
import TransitionFile4 from './TransitionFile4';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import User from './furtherConcepts/ContextWithAuth/User'
import AdminPage from './furtherConcepts/ContextWithAuth/AdminPage'
import Home from './furtherConcepts/ContextWithAuth/Home'
import {Link} from 'react-router-dom'

function Navigation(){
  return (
    <div style={{display:'flex', flexDirection:'row',  justifyContent:'space-between', width: 700}}>
      <Link to="/TransitionFile1">concepts</Link>
      <Link to="/TransitionFile2">Further concepts</Link>
      <Link to="/TransitionFile3">Context Examples</Link>
    </div>
  )
}

export const AppContext = React.createContext()
const initialState = false
const accessReducer = (state, action) =>{
  switch(action.type){
    case 'access':
      return true
    case 'no-access':
      return false
    default:
      return state
  }
}


export const LoginContext = React.createContext()
const loginState = {user: '', designation:'', auth: false}
const loginReducer = (state, action) =>{
  switch(action.type) {
    case 'login-admin':
      return {user: action.payload, designation:'admin', auth: true}
    case 'login-user':
      return {user: action.payload, designation:'user', auth: true}
    case 'logout':
      return {user: '', designation:'', auth: false}
    default:
      return state
  }
}



function App() {

    const [state, accessDispatch] = useReducer(accessReducer, initialState)
    const [statelogin, loginDispatch] = useReducer(loginReducer, loginState)

    return (
      <React.Fragment>
      
      <AppContext.Provider value={{state: state, accessDispatch: accessDispatch}}>
        <LoginContext.Provider value={{state: statelogin, loginDispatch: loginDispatch}}>
          <Router>
            <Navigation/>
              <Routes> 
                      <Route exact path='/' element={< TransitionFile1/>} />
                      <Route exact path='/Home' element={< Home/>} />
                      <Route exact path='/AdminPage' element={< AdminPage/>} />
                      <Route exact path='/User' element ={<User/>} />
                      <Route exact path='/TransitionFile1' element ={<TransitionFile1/>} />
                      <Route exact path='/TransitionFile2' element ={<TransitionFile2/>} />
                      <Route exact path='/TransitionFile3' element ={<TransitionFile3/>} />
                      <Route path="*" element={<div>There is Nothing here</div>}></Route>
              </Routes>
          </Router>
        </LoginContext.Provider>
      </AppContext.Provider>

      </React.Fragment>
    )
  }


export default App;
