import React, { PureComponent } from 'react'

// This is for Pure Component, they don't rerender on state change
class PurComponent extends PureComponent {
  render() {
    return (
      <div>PureComponent</div>
    )
  }
}

export default PurComponent