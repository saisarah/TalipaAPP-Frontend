import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export const AppContext = createContext({});


const useViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // const debounceWidth = useDebounce(width, 300)
  // const view = (minWidth) => (className) => width >= minWidth ? className : "";
  // const sm = view(640);
  // const md = view(768);
  // const lg = view(1024);
  // const xl = view(1280);
  // const xxl = view(1536);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isSmall: width >= 640,
    isMedium: width >= 768,
    isLarge: width >= 1024,
    isXLarge: width >= 1280,
    is2XLarge: width >= 1536,
  };
};

export function AppContextProvider({ isAndroid, children }) {
  const [context, setContext] = useState("guest");
  const viewport = useViewPort();

  const getFullPath = (path) => {
    if (isAndroid) return `${window.location.origin}/#${path}`
    return `${window.location.origin}${path}`
  }

  return (
    <AppContext.Provider value={{ getFullPath, isAndroid, context, setContext, viewport }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
