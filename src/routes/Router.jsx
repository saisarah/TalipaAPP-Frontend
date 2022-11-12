import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import HomeCustomer from "../pages/home/customer/HomeCustomer";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <HomeCustomer />
      },
      {
        path: '/orders',
        element: <div>Orders</div>
      },
      {
        path: '/messages',
        element: <div>Messages</div>
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
