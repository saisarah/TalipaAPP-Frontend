import { useMessageReceived } from "@/hooks/listeners/useMessageReceived";
import { createContext, useContext } from "react";

export const FarmerContent = createContext({});

export const FarmerContextProvider = ({ children, user }) => {

  useMessageReceived(user.id);

  return (
    <FarmerContent.Provider value={{ user }}>{children}</FarmerContent.Provider>
  );
};

export const useFarmerContext = () => {
  return useContext(FarmerContent);
};
