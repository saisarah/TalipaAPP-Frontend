import { Outlet } from "react-router-dom";
import Login from "../pages/login/Login";
import vendorRoutes from "./vendorRoutes";
import farmerRoutes from "./farmerRoutes";
import Verification from "../pages/login/Verification";
import VendorGate from "../components/VendorGate";
import Registration from "../pages/farmer-registration/Registration";
import Register from "../pages/register/Register";
import Information from "../pages/farmer-registration/Information";
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
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
  {
    path: "/information",
    element: <Information />
  }
];
