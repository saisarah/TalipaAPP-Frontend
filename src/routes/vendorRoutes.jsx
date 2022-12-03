import Home from "../pages/customer/home/Home";
import Category from "../pages/customer/categories/Category";
import Product from "../pages/customer/products/Product";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Wallet from "../pages/customer/wallet/Wallet";
import Messages from "../pages/customer/messages/Messages";
import Account from "../pages/customer/account/Account";
import Cart from "../pages/customer/cart/Cart";
import Likes from "../pages/customer/likes/Likes";
import Notifications from "../pages/customer/notifications/Notifications";

export default [
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/wallet',
        element: <Wallet />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/notifications',
        element: <Notifications />
      },
      
    ]
  },
  {
    path: "/categories/:id",
    element: <Category />
  },
  {
    path: "/products/:id",
    element: <Product />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/likes',
    element: <Likes />
  },
  
]