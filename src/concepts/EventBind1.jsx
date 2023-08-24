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
  }  
/////////////////////////////////////////////////////////////////////////////////////
//  methods in react classes written without 'function' or const keyword
//  clickhandler(){
//     // we cant just call clickhandler and use setState, because 'this' is undefined for the function
//     this.setState({
//         message:'After'
//     })
//   }
/////////////////////////////////////////////////////////////////////////////////////

// every time its called it will be rerendered
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

    {/* won't work because 'this' is undefined */}
    {/* <button onClick={this.clickhandler}>Click me</button> */}
    
    <button onClick={this.clickhandler.bind(this)}>Click me (bind)</button>

    <div>{this.state.message}</div>

    <button onClick={()=>this.clickhandler()}>Click me (arrow function)</button>
    </>
    )
  }
}

export default EventBind

