import { useEffect, useState } from "react";
import { useLocation, useNavigationType, useSearchParams } from "react-router-dom";

export const useEffectSkipFirst = (callback, dependencies) => {
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
    } else {
      callback();
    }
  }, dependencies);
};

export const useTab = (tabs = [], defaultActive) => {
  const [params] = useSearchParams();
  const selected = tabs.includes(params.get("tab"))
    ? params.get("tab")
    : defaultActive;
  const isActive = (tab) => tab == selected;

  return { isActive, selected };
};

export const useHistoryStack = () => {
  const [stack, setStack] = useState([]);
  const { pathname } = useLocation();
  const type = useNavigationType();

  useEffect(() => {
    if (type === "POP") {
      setStack((prev) => prev.slice(0, prev.length - 1));
    } else if (type === "PUSH") {
      setStack((prev) => [...prev, pathname]);
    } else {
      setStack((prev) => {
        if (prev.length === 0) 
          return []

        return [...prev.slice(0, prev.length - 1), pathname]
      });
    }
  }, [pathname, type]);

  return stack;
}