import React from 'react'
import {UserContext, ChannelContext} from './AppHooks'

function ComponentF() {
  return (
    <UserContext.Consumer>
        {   
            user=>{
                return <ChannelContext.Consumer>
                    {
                        channel=>{
                            return <div>This is component with context value {user} and {channel}, without hooks, it is more verbose</div>
                        }
                    }
                </ChannelContext.Consumer>
            }
        }
    </UserContext.Consumer>
  )
}

export default ComponentF