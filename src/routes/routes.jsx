import { Outlet } from "react-router-dom";
import Login from "../pages/login/Login";
import vendorRoutes from "./vendorRoutes";
import farmerRoutes from "./farmerRoutes";

export default [
  {
    element: <Outlet />,
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
    element: <div>Register</div>,
  },
];
