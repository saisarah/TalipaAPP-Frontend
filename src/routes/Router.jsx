import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
  useRoutes,
  useLocation,
  BrowserRouter,
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
  return <BrowserRouter><Temp /></BrowserRouter>
}
