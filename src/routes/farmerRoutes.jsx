import Feed from "../pages/farmer/Feed/Feed";
import FarmerHome from "../pages/farmer/home/FarmerHome";
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
    path: "profile",
    element: <FarmersProfile/>
  }
]