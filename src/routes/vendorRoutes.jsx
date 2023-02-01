import Account from "@/pages/customer/account/Account";
import CreatePost from "@/pages/farmer/CreatePost/CreatePost";
import { VendorLayout } from "@/pages/vendor/components/VendorLayout/VendorLayout";
import { Home } from "@/pages/vendor/Home/Home";
import { Messages } from "@/pages/vendor/Messages/Messages";
import { PostDetailsPage } from "@/pages/vendor/PostDetails/PostDetailsPage";
import Posting from "@/pages/vendor/PostDetails/Posting";

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
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
  {
    path: "/posts/:id",
    element: <PostDetailsPage />,
  },
  {
    path: "/Posting",
    element: <Posting />,
  },
];
