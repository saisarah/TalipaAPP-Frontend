import Feed from "../pages/farmer/Feed/Feed";
import FarmerHome from "../pages/farmer/home/FarmerHome";
import PostDetails from "../pages/farmer/PostDetails/PostDetails";
import Profile from "../pages/farmer/Profile/Profile";

export default [
  {
    path: "",
    element: <FarmerHome />,
  },
  {
    path: "home",
    element: <Feed />,
  },
  {
    path: "posts/:id",
    element: <PostDetails />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
