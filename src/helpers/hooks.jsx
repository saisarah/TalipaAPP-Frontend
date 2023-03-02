import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useNavigationType,
  useSearchParams,
} from "react-router-dom";

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

export const useTab = (tabs = [], defaultActive = null) => {
  defaultActive = defaultActive || tabs[0];
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const tab = params.get("tab");
  const selected = !tabs.includes(tab) ? defaultActive : tab;

  const isActive = (tab) => tab === selected;

  useEffect(() => {
    if (!tabs.includes(tab)) {
      navigate(`?tab=${defaultActive}`, { replace: true });
    }
  }, [tab]);

  return { isActive, selected };
};

export const useTabAdvance = (tabs = {}) => {
  const [params] = useSearchParams();
  const tabKeys = Object.keys(tabs);
  const tab = params.get("tab");
  const selected = !tabKeys.includes(tab) ? tabKeys[0] : tab;
  const navigate = useNavigate();
  const tabLinks = tabKeys.map((tab) => ({
    key: tab,
    title: tabs[tab]["title"],
  }));

  useEffect(() => {
    if (!tabKeys.includes(tab)) {
      navigate(`?tab=${tabKeys[0]}`, { replace: true });
    }
  }, [tab]);

  return {
    outlet: tabs[selected].element,
    tabs: tabLinks,
  };
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
        if (prev.length === 0) return [];

        return [...prev.slice(0, prev.length - 1), pathname];
      });
    }
  }, [pathname, type]);

  return stack;
};
