import FarmerHome from "../pages/farmer/home/FarmerHome";
import FarmersProfile from "../pages/farmersProfile/FarmersProfile";

export default [
  {
    path: "",
    element: <FarmerHome />
  },
  {
    path: "profile",
    element: <FarmersProfile/>
  }
]