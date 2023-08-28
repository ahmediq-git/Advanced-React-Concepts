import React, { Component } from 'react'

class RenderPropsButton extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <>
      <div>{count}</div>
      <button onClick={incrementCount} style={{
            borderRadius: '50%', 
            width: '40px',
            height: '40px',
            fontSize: '20px',    
          }}>+</button>
      </>
    )
  }
}

export default RenderPropsButton