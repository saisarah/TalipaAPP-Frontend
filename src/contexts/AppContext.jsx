import { createContext } from "react";

export const AppContext = createContext({})

export function AppContextProvider({ children  })
{
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}