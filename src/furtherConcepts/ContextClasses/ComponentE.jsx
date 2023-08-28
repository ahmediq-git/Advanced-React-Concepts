import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
  // method 2 of importing context
  // static contextType=UserContext
  render() {
    return (
      <>
      <div>The context value of method 2 is {this.context}</div>
      <ComponentF/>
      </>  
    )
  }
}
// method 1 of importing context
ComponentE.contextType=UserContext //these 2 methods only work with class components, for all components use the method in ComponentF
export default ComponentE