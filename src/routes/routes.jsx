import vendorRoutes from "./vendorRoutes";
import farmerRoutes from "./farmerRoutes";
import VendorGate from "../components/VendorGate";
import FarmerGate from "../components/FarmerGate";
import GuestGate from "../components/GuestGate";
import guestRoutes from "./guestRoutes";

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
];
