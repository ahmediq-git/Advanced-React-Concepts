// Higher order components are used to share common functionality amongst components

// So if you implement a counter , and 5000 other files need counters, you can use a higher order component to share the counter functionality

// const NewComponent = higherOrderComponent(originalComponent)

import React, { Component } from 'react'
import WithCount from './WithCount'

class HighOrder1 extends Component {
  render() {
    const {count, incrementCount}=this.props //this is destructuring the props from the wrapper component
    return (
        // this.props.name is taken from where it is called
      <div onMouseOver={incrementCount}>{this.props.name} Hovered {count} times</div>
    )
    }
}

export default WithCount(HighOrder1, 5);