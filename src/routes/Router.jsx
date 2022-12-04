import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import routes from "./routes";

const platform = import.meta.env.VITE_PLATFLORM;

const router = (platform === 'android') 
  ? createHashRouter(routes)
  : createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
