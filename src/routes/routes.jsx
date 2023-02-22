import vendorRoutes from "./vendorRoutes";
import farmerRoutes from "./farmerRoutes";
import guestRoutes from "./guestRoutes";
import FarmerGate from "./gates/FarmerGate";
// import GuestGate from "../components/GuestGate";
import VendorGate from "./gates/VendorGate";
import GuestGate from "./gates/GuestGate";
import adminRoutes from "./adminRoutes";
import { Outlet } from "react-router-dom";

export default [
  {
    element: <VendorGate />,
    children: vendorRoutes,
  },
  {
    path: "/farmer",
    element: <FarmerGate />,
    children: farmerRoutes,
  },
  {
    element: <GuestGate />,
    children: guestRoutes
  },
  {
    path: "/admin",
    children: adminRoutes,
    element: <Outlet />
  }
];
