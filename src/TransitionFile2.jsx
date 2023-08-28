import React, { Component } from 'react'
import ReducerApi from './furtherConcepts/ReducerApi'
import Counter from './concepts/RenderProps/Counter'
import RenderPropsButton from './furtherConcepts/RenderPropsButton'
import RenderPropsSp from './furtherConcepts/RenderPropsSp'

class TransitionFile2 extends Component {
  render() {
    return (
      <>
        <h3>Methods in UseReducer</h3>
        <ReducerApi/>

        <h3>Render Props Revisited</h3>
        <h4>Example 1</h4>
        <Counter render={(count, incrementCount)=>(
            <RenderPropsButton count={count} incrementCount={incrementCount} />
            )} />

        <h4>Example 2</h4>

        <Counter render={(count, incrementCount)=>(
            <RenderPropsSp count={count} incrementCount={incrementCount} />
        )} />

        <h3>Context</h3>

        
      </>
    )
  }
}

export default TransitionFile2