import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './userContext'

class App extends Component {
  render() {
    return (
      // when commented out you can access the default value
      <UserProvider value="Ahmed">
        <ComponentC/>
      </UserProvider>
    )
  }
}

export default App