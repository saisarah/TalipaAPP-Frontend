import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createHashRouter,
} from "react-router-dom";
import Home from "../pages/customer/home/Home";
import Login from "../pages/login/Login";
import Category from "../pages/customer/categories/Category";
import Product from "../pages/customer/products/Product";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Wallet from "../pages/customer/wallet/Wallet";
import Messages from "../pages/customer/messages/Messages";
import Account from "../pages/customer/account/Account";
import Cart from "../pages/customer/cart/Cart";
import Likes from "../pages/customer/likes/Likes";
import Notifications from "../pages/customer/notifications/Notifications";
import Information from "../pages/farmer-registration/Information";
import Address from "../pages/farmer-registration/Address";
import Farm from "../pages/farmer-registration/Farm";
import Crops from "../pages/farmer-registration/Crops";
import Registration from "../pages/farmer-registration/Registration";

const platform = import.meta.env.VITE_PLATFLORM;

const routes = [
  {
    element: <Outlet />, //Customer,
    children: [
      {
        element: <HomeLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/wallet",
            element: <Wallet />,
          },
          {
            path: "/messages",
            element: <Messages />,
          },
          {
            path: "/account",
            element: <Account />,
          },
          {
            path: "/notifications",
            element: <Notifications />,
          },
        ],
      },
      {
        path: "/categories/:id",
        element: <Category />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/likes",
        element: <Likes />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/information",
    element: <Information />,
  },
  {
    path: "/address",
    element: <Address />,
  },
  {
    path: "/farm",
    element: <Farm />,
  },
  {
    path: "/crops",
    element: <Crops />,
  },
];

const router =
  platform === "android"
    ? createHashRouter(routes)
    : createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
