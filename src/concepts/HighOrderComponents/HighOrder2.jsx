import React, { Component } from 'react'
import WithCount from './WithCount'

class HighOrder2 extends Component {
  render() {
    const {count, incrementCount}=this.props
    return (
      <button onClick={incrementCount}>Clicked {count} times</button>
    )
  }
}

export default WithCount(HighOrder2, 10);