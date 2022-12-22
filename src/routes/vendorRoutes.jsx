import Messages from "@/pages/customer/messages/Messages";
import Account from "@/pages/customer/account/Account";
import Cart from "@/pages/customer/cart/Cart";
import Likes from "@/pages/customer/likes/Likes";
import Notifications from "@/pages/customer/notifications/Notifications";
import { VendorLayout } from "@/components/VendorLayout/VendorLayout";
import HomeCustomer from "@/pages/customer/home/Home";
import Category from "@/pages/customer/categories/Category";
import Product from "@/pages/customer/products/Product";
import Wallet from "@/pages/customer/wallet/Wallet";

export default [
  {
    element: <VendorLayout />,
    children: [
      {
        path: "/",
        element: <HomeCustomer />,
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
];
