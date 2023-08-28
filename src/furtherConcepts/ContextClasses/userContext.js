import React, {createContext} from 'react'

// can pass default value too
const UserContext=createContext('Defaultval')
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}

// The provider gives the variable
// The consumer uses the variable where needed

// Method 2 of Context, (See component E)
export default UserContext