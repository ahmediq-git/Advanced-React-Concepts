// rce is short cut to make a class component
// binding is needed due to the 'this' keyword in javascript

// Event binder with bind keyword and the arrow function call


// Both EventBind2 and EventBind3 are the best
import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message:"Before",
    }

  }  

    clickhandler = ()=>{
        this.setState({
            message:"After"
        })
        console.log(this)
    }

  render() {
    return (
    <>
    <div>{this.state.message}</div>

    <button onClick={this.clickhandler}>Click me (bind arrow functions)</button>
    </>
    )
  }
}

export default EventBind

