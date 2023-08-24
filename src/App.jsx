import React, {Component} from 'react'
import EventBind1 from './concepts/EventBind1';
import EventBind2 from './concepts/EventBind2';
import EventBind3 from './concepts/EventBind3';
import Fragments from './concepts/Fragments/Fragments'

import Portals from './concepts/Portals'

// import WithCount from './concepts/HighOrderComponents/WithCount'
import HighOrder1 from './concepts/HighOrderComponents/HighOrder1';
import HighOrder2 from './concepts/HighOrderComponents/HighOrder2';
// With React.Fragment, the elements appear as siblings

import RenderProps1 from './concepts/RenderProps/RenderProps1';
import RenderProps2 from './concepts/RenderProps/RenderProps2';
import User from './concepts/RenderProps/User'
import Counter from './concepts/RenderProps/Counter'

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <h1>React Concepts</h1>

        <h3>Event Binding</h3>

        <h5>EventBind example 1</h5>
        <EventBind1/>
        <h5>EventBind example 2</h5>
        <EventBind2/>
        <h5>EventBind example 3</h5>
        <EventBind3/>

        <h3>Fragments</h3>

        <h5>Fragments example 1</h5>
        <Fragments/>

        <h3>Portals</h3>
        <div>Portal displayed in the center</div>
        <Portals/>

        <h3>High Order Components</h3>
        <div>These are excellent for layouts, and just need to wrap a component with HOC</div>
        <div>&nbsp;</div>

        <HighOrder1 name='Ahmed'/>
        <div>&nbsp;</div>
        <HighOrder2/>

        <h3>Render Props</h3>

        <Counter render={
          (count, incrementCount)=>
            <RenderProps1 count={count} incrementCount={incrementCount}/>
          
        }/>

        <Counter render={
          (count, incrementCount)=>
            <RenderProps2 count={count} incrementCount={incrementCount}/>
          
        }/> 

        <User name={(isLoggedin)=>isLoggedin?"Ahmed":"Guest"}/>

        <h3>useReducer Hook</h3>

        
      </React.Fragment>
    )
  }
}

export default App;
