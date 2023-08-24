import React from 'react'
import useDocumentTitle from './useDocumentTitle'

function PageUsingHook() {

  useDocumentTitle(5)
  
  return (
    <div>PageUsingHook</div>
  )
}

export default PageUsingHook