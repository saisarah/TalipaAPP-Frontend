import { useMessageReceived } from "@/hooks/listeners/useMessageReceived";
import { createContext, useContext, useEffect, useState } from "react";

export const VendorContext = createContext({});

export const VendorContextProvider = ({ children, user }) => {
  const [title, setTitle] = useState("TalipaAPP");

  useMessageReceived(user.id);

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
