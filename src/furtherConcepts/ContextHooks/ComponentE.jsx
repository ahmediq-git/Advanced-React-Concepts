import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from './AppHooks'

function ComponentE() {
const user=useContext(UserContext)
const channel=useContext(ChannelContext)

  return (
    <>
    <div>This is the {user} and {channel} with hooks</div>
    <ComponentF/>
    </>
  )
}

export default ComponentE