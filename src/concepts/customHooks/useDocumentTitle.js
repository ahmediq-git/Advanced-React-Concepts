// custom hooks are an alternative to Render Props and HOC

import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title=`All Concpets`
    },[count])
}

export default useDocumentTitle