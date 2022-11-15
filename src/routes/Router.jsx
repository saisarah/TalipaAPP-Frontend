import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createHashRouter,
  Outlet,
} from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Messages from "../pages/customer/messages/Messages";
import Home from "../pages/customer/home/Home";
import Login from "../pages/login/Login";
import Orders from "../pages/customer/orders/Orders";
import Category from "../pages/customer/categories/Category";

const router = createBrowserRouter([
  {
    element: <Outlet />, //Customer,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/categories/:id",
        element: <Category />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
