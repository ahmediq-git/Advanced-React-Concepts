import React, { Component } from 'react'

// Render props is sharing code with multiple react components using a prop whose value is a function
class User extends Component {
  render() {
    return (
        <>
          {this.props.name(false)}
        </>
    )
  }
}

export default User