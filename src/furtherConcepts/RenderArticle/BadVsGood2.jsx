// function MyComponent() {
//     const [counter, setCounter] = useState(0);
  
//     const handleClick = () => {
//       setCounter(counter + 1);
//       // ❌ THIS WON'T WORK!
//       console.log(counter);
//       // Original value was logged - why is this not updated yet??????
//     };
//   }

// It wont print the new value, it will print the the old value

// Although renders are the normal expected part of how React works, it's also true that
//  that render work can be "wasted" effort at times. If a component's render output didn't
//  change, and that part of the DOM didn't need to be updated, then the work of rendering that 
// component was really kind of a waste of time.

// React component render output should always be entirely based on current props and current component
//  state. Therefore, if we know ahead of time that a component's props and state haven't changed, we should 
// also know that the render output would be the same, that no changes are necessary for this component, and 
// that we can safely skip the work of rendering it.

// When trying to improve software performance in general, there are two basic approaches: 1) do the same work
//  faster, and 2) do less work. Optimizing React rendering is primarily about doing less work by skipping rendering
//  components when appropriate.

// React re-renders all nested components even if their props haven't changed.React re-renders all nested components even if their props haven't changed.


// That also means there's no point in trying to optimize renders for "host components" like a <div> or a <button> by wrapping them up in a React.memo(). There's no child component underneath those basic components, so the rendering process would stop there anyway.


//As mentioned above, you don't have throw useMemo and useCallback at every single function or object you pass down as a prop
// - only if it's going to make a difference in behavior for the child. (That said, the dependency array comparisons for useEffect
// do add another use case where the child might want to receive consistent props references, which does make things more complicated.)