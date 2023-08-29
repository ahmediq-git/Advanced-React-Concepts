# Rerendering

React's default behavior is that when a parent component renders, React will recursively render all child components inside of it!


```jsx
// ❌ BAD!
// This creates a new `ChildComponent` reference every time and should be avoided!
function ParentComponent() {
    function ChildComponent() {
      return <div>Hi</div>;
    }
  
    return <ChildComponent />;
  }
```

This creates a child component on rerender each time
If an element in a given spot has changed to a different type, such as going from `<div>` to `<span>` or `<ComponentA>` to `<ComponentB>`, React will speed up the comparison process by assuming that entire tree has changed. As a result, React will destroy that entire existing component tree section, including all DOM nodes, and recreate it from scratch with new component instances.

```jsx
// Define separately outside of the component
// ✅ GOOD
// This only creates one component type reference
function ChildComponent() {
    return <div>Hi</div>;
  }
  
function ParentComponent1() {
    return <ChildComponent />;
}
```

### Keys
Note that key isn't actually a real prop - it's an instruction to React.
React will always strip that off, and it will never be passed through to the
actual component, so you can never have props.key - it will always be undefined.

✅ Use a data object ID as the key for list items
```jsx
todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />);
```

Everything in react is immutable and if we change anything mutably like:
const onClick = () => {
  const newTodos = todos.slice();
  newTodos[3].completed = true;
  setTodos(newTodos);
};


Then react wont know whether to rerender or not as the reference has not changed and that can mess things up
So changes should be done immutably so the reference change and adjust accordingly
Bottom line: React, and the rest of the React ecosystem, assume immutable updates. Any time you mutate, you run the risk of bugs. Don't do it.

In context, when the provider value changes, only those child components consuming the value will rerender


The React Component Right Under Your Context Provider Should Probably Use React.memo
This will mean that not everything will rerender in the child components and only those using the provider will re render

function ChildComponent() {
  return <GrandchildComponent />
}

const MemoizedChildComponent = React.memo(ChildComponent);

function ParentComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState("text");

  const contextValue = {a, b};

  return (
    <MyContext.Provider value={contextValue}>
      <MemoizedChildComponent />
    </MyContext.Provider>
  )


If you're exclusively using function components and useSelector, then it's likely that larger
 parts of your component tree will re-render based on Redux store updates than they would with
  connect, since there aren't other connected components to stop those render cascades from continuing down the tree.

Use context if:
You just need to pass some simple values that don't change often
You have some state or functions that need to be accessed through part of the app, and you don't want to pass them as props all the way down
You want to stick with what's built in to React and not add additional libraries
Use (React-)Redux if:
You have large amounts of application state that are needed in many places in the app
The app state is updated frequently over time
The logic to update that state may be complex
The app has a medium or large-sized codebase, and might be worked on by many people