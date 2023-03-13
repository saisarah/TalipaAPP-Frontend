import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./MainRoutes";

const platform = import.meta.env.VITE_PLATFLORM;
const createRouter =
  platform === "android" ? createHashRouter : createBrowserRouter;

const router = createRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
