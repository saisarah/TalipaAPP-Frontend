import FarmerGate from "./gates/FarmerGate";
import GuestGate from "./gates/GuestGate";
import VendorGate from "./gates/VendorGate";
import guestRoutes from "./guestRoutes";

import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const FarmerRoutes = lazy(() => import("./FarmerRoutes/FarmerRoutes"));
const AdminRoutes = lazy(() => import("./AdminRoutes"));
const VendorRoutes = lazy(() => import("./VendorRoutes"));

export const routes = [
  {
    path: "/*",
    element: <VendorGate element={<VendorRoutes />} />,
  },
  {
    path: "/farmer/*",
    element: <FarmerGate element={<FarmerRoutes />} />,
  },
  {
    element: <GuestGate />,
    children: guestRoutes,
  },
  {
    path: "/admin/*",
    element: <AdminRoutes />,
  },
];

export default function MainRoutes() {
  const mainRoutes = useRoutes(routes);
  return <Suspense fallback={<LoadingScreen />}>{mainRoutes}</Suspense>;
}
