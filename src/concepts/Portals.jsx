import React, { Component } from 'react'

// A Portal is when you send a component somehwere else in the dom

// they are used for pop ups, loading screens, cookies messages.

// essentially you make a seperate 'layer' in public/index.html where after     <div id="root"></div> you make a div for portals to exist

// Portal elements will be rendered outside the DOM. This will make elements pop out, as they are not in the same DOM
// it will also prevent pop out elements from getting cut by the exising DOM as they would be encassed in div for example that has limited properties


// (Can portals be used to hack, question to think about): 

//with a portal you can teleport a node to a place with a provider and access the provider
import ReactDOM from 'react-dom' //need to import this

function Portals({show}) {
    return ReactDOM.createPortal(
        // define portal element
    <div style={{position:'absolute', top:'50vh',left:'50vw', width:200, height:100, backgroundColor:'#00000099'}}>
        Portals are used to teleport a node to a place with a provider and access the provider, they are also used for popups

      </div>,
      document.getElementById('portal-root')
    //   define the div where the portal will be rendered
    );
}

export default Portals