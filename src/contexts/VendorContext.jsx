import { useMessageReceived } from "@/hooks/listeners/useMessageReceived";
import { createContext, useContext, useEffect, useState } from "react";
import { useAppContext } from "./AppContext";

export const VendorContext = createContext({});

export const VendorContextProvider = ({ children, user }) => {
  const [title, setTitle] = useState("TalipaAPP");
  const { setContext, setUserID } = useAppContext()

  useMessageReceived(user.id);
  useEffect(() => {
    setContext("vendor")
    setUserID(user.id)
    return () => {
      setContext("guest")
      setUserID(null)
    }
  }, [])

  return (
    <VendorContext.Provider value={{ title, setTitle, user }}>
      {children}
    </VendorContext.Provider>
  );
};

export const useVendorContext = () => {
  return useContext(VendorContext);
};

export const useTitle = (title) => {
  const { setTitle } = useVendorContext();

  useEffect(() => {
    setTitle(title);

    return () => {
      setTitle("");
    };
  }, []);
};
