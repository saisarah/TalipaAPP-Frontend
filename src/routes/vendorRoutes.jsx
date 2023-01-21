import Account from "@/pages/customer/account/Account";
import { VendorLayout } from "@/pages/vendor/components/VendorLayout/VendorLayout";
import { Home } from "@/pages/vendor/Home/Home";
import { Messages } from "@/pages/vendor/Messages/Messages";

export default [
  {
    element: <VendorLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
];
