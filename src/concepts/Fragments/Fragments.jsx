// You know how in return we wrap around <div/> or a single component?
// And in inspect element it shows the parent as div
// In some cases this can be annoying and ugly

// So the alternative is to use React.Fragment or <></> which is the same thing. We can even pass keys in the fragment but no other parameter

// Note: React fragment let us group children elements  without adding any extra node in the DOM


// Do inspect element and we will see that no extra tag is injected in the dom.

// Sometimes some tags like td can't be children of div, so we can use fragments to wrap around them
import React from 'react'

const Example2=()=>{


    return (
        <>
        Hello
        </>
    );
}

// When you render multiple elements in a loop, you need to assign a key to each element. If the elements within the loop are Fragments, you need to use the normal JSX element syntax in order to provide the key attribute:
const Example3 = ()=>{
    const posts = [
        { id: 1, title: 'An update', body: "It's been a while since I posted..." },
        { id: 2, title: 'My new blog', body: 'I am starting a new blog!' },
        { id:3, title:'This is Title 3', body:'lorem ipsum'}
      ];

    return posts.map(post =>
        <React.Fragment key={post.id}>
            <div>{post.title}</div>
            <div>{post.id}</div>
        </React.Fragment>
        );

}

function Fragments() {
    // This is example 1

    
  return (
    <React.Fragment>
        <td>
        col 1
        </td>
        <td>
        col 2
        </td>
        <Example2/>
        <Example3/>
    </React.Fragment>
  )
}

export default Fragments

