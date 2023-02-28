import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [context, setContext] = useState("guest");

  return (
    <AppContext.Provider value={{ context, setContext }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
