import { useAppContext } from "@/contexts/AppContext";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./MainRoutes";

export default function Router() {
  const { isAndroid } = useAppContext();
  const router = isAndroid
    ? createHashRouter(routes)
    : createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
