import { useMessageReceived } from "@/hooks/listeners/useMessageReceived";
import { createContext, useContext, useEffect } from "react";
import { useAppContext } from "./AppContext";

export const FarmerContent = createContext({});

export const FarmerContextProvider = ({ children, user }) => {
  const { setContext } = useAppContext()
  useMessageReceived(user.id);
  useEffect(() => {
    setContext("farmer")
    return () => {
      setContext("guest")
    }
  }, [])

  return (
    <FarmerContent.Provider value={{ user }}>{children}</FarmerContent.Provider>
  );
};

export const useFarmerContext = () => {
  return useContext(FarmerContent);
};
