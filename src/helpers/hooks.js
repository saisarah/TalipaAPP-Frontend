import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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

export const useTab = (tabs, defaultActive) => {
  const [params] = useSearchParams();
  const selected = tabs.includes(params.get("tab"))
    ? params.get("tab")
    : defaultActive;
  const isActive = (tab) => tab == selected;

  return { isActive };
};
