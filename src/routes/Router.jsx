import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
  useRoutes,
  useLocation,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import routes from "./routes";

const platform = import.meta.env.VITE_PLATFLORM;

const router =
  platform === "android"
    ? createHashRouter(routes)
    : createBrowserRouter(routes);

const Temp = () => {
  const element = useRoutes(routes);
  const location = useLocation()

  if (!element) return null

  return (
    <AnimatePresence mode="wait">
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default function Router() {
  if (platform === "android") {
    return <HashRouter><Temp /></HashRouter>
  }
  
  return <BrowserRouter><Temp /></BrowserRouter>
}
