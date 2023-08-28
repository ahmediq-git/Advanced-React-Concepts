import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const valforchannel='valtopass'

// Using context with classic method is in Component F
// Using context with hooks is in Component E
function AppHooks() {
  return (
    <UserContext.Provider value='Ahmed'>
        <ChannelContext.Provider value={valforchannel}>
        <ComponentC/> 
        </ChannelContext.Provider>
    </UserContext.Provider>
  )
}

export default AppHooks