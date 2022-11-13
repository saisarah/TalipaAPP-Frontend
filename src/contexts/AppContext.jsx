import { createContext } from "react";

export const AppContext = createContext({})

export function AppContextProvider({ children, isLogin, setIsLogin, email, password })
{
  return (
    <AppContext.Provider value={{ isLogin, setIsLogin, email, password }}>
      {children}
    </AppContext.Provider>
  )
}