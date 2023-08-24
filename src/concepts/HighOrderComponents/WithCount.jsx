import React, { Component } from 'react'

// Do note there is a way to keep it fully functional, refer to layouts in my other folder

const WithCount = (WrappedComponent, incrementNumber) => {      
    class WithCountInternal extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
            count:0,
            }
        }
        
        increment = ()=>{
            this.setState(prevState=>{
                return {count:prevState.count+incrementNumber}
            }
            );
        }

        render(){
            return (
                <WrappedComponent count={this.state.count} incrementCount={this.increment} {...this.props}/>
                // essentially you do {...this.props} so that the other props being passed to the target don't get messed up
            )
    }

}
    return WithCountInternal;
}

export default WithCount; //You return the external here