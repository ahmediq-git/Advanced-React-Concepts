import React, {useState} from 'react'

function useAdd() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    
    return [count, increment];
}

export default useAdd;