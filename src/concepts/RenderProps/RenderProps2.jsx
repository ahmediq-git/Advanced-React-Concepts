import React, { Component } from 'react'

class RenderProps2 extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div onMouseOver={incrementCount}>Hovered {count} times</div>
    )
  }
}

export default RenderProps2