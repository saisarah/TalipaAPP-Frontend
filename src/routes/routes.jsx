import { Outlet } from "react-router-dom";
import Login from "../pages/login/Login";
import vendorRoutes from "./vendorRoutes";
import farmerRoutes from "./farmerRoutes";
import Verification from "../pages/login/Verification";
import VendorGate from "../components/VendorGate";
import FarmersProfile from "../pages/farmersProfile/FarmersProfile";
export default [
  {
    element: <VendorGate />,
    children: vendorRoutes,
  },
  {
    path: "/farmer",
    element: <Outlet />,
    children: farmerRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
  {
    path: "/farmersProfile",
    element: <FarmersProfile/>,
  },
];
