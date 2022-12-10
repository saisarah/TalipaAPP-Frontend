import Feed from "../pages/farmer/Feed/Feed";
import FarmerHome from "../pages/farmer/home/FarmerHome";
import PostDetails from "../pages/farmer/PostDetails/PostDetails";
import FarmersProfile from "../pages/farmersProfile/FarmersProfile";

export default [
  {
    path: "",
    element: <FarmerHome />
  },
  {
    path: "home",
    element: <Feed />
  },
  {
    path: "posts/:id",
    element: <PostDetails />,
  },
  {
    path: "profile",
    element: <FarmersProfile/>
  }
]