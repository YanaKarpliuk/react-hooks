// a context for storing information about the current state of the user - login status and personal information.
import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState(null)

  const logIn = () => {
    setIsLoggedIn(true)
    setUserName("Yana")
  }

  const logOut = () => {
    setIsLoggedIn(false)
    setUserName(null)
  }

  return (
    <UserContext.Provider value={{isLoggedIn, userName, logIn, logOut}}>
      {children}
    </UserContext.Provider>
  )
}