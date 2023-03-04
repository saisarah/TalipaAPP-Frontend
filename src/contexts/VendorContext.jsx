import { createContext, useContext, useEffect } from "react";

export const VendorContext = createContext({});

export const VendorContextProvider = ({ children, ...props }) => {
  return <VendorContext.Provider {...props}>{children}</VendorContext.Provider>;
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
