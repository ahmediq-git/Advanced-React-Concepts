// rce is short cut to make a class component
// binding is needed due to the 'this' keyword in javascript

// Event binder with bind keyword and the arrow function call

import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message:"Before",
    }

    this.clickhandler = this.clickhandler.bind(this)
  }  

   clickhandler(){
    // we cant just call clickhandler and use setState, because 'this' is undefined for the function
    this.setState({
        message:'After'
    })
    console.log(this)
  }

  render() {
    return (
    <>
    <div>{this.state.message}</div>

    <button onClick={this.clickhandler}>Click me (bind in constructor)</button>
    </>
    )
  }
}

export default EventBind

