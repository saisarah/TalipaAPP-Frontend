import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createHashRouter,
} from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Messages from "../pages/customer/messages/Messages";
import Home from "../pages/customer/home/Home";
import Login from "../pages/login/Login";
import Orders from "../pages/customer/orders/Orders";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/settings',
        element: <div>Settings</div>
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
