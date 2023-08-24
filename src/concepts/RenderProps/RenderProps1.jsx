import React, { Component } from 'react'

class RenderProps1 extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <button onClick={incrementCount}>Clicked {count} times</button>
    )
  }
}

export default RenderProps1