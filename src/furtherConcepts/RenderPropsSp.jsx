import React, { Component } from 'react'

class RenderPropsSp extends Component {
  render() {
    const {count, incrementCount} = this.props

    return (
        <>
            <button onClick={incrementCount}> {count} </button>
            <div> + </div>
            <button onClick={incrementCount}> {count} </button>
            <div>Answer: {count+count}</div>
        </>
   
    )
  }
}

export default RenderPropsSp