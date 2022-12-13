import Feed from "../pages/farmer/Feed/Feed";
import Group from "../pages/farmer/group/Group";
import FarmerHome from "../pages/farmer/home/FarmerHome";
import PostDetails from "../pages/farmer/PostDetails/PostDetails";
import Profile from "../pages/farmer/Profile/Profile";
import Conversations from "../pages/messages/Conversations";

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
  {
    path: "messages",
    element: <Conversations />,
  },
  {
    path: "groups",
    element: <Group />,
  },
];
