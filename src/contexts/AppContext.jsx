import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export const AppContext = createContext({});

// Hook
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

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

export function AppContextProvider({ children }) {
  const [context, setContext] = useState("guest");
  const viewport = useViewPort();

  return (
    <AppContext.Provider value={{ context, setContext, viewport }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
