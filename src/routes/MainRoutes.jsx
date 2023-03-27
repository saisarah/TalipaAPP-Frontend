import FarmerGate from "./gates/FarmerGate";
import GuestGate from "./gates/GuestGate";
import VendorGate from "./gates/VendorGate";
import guestRoutes from "./guestRoutes";

import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import LandingPage from "@/pages/LandingPage/LandingPage";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const FarmerRoutes = lazy(() => import("./FarmerRoutes/FarmerRoutes"));
const AdminRoutes = lazy(() => import("./AdminRoutes"));
const VendorRoutes = lazy(() => import("./VendorRoutes"));

const wrapSuspense = (element) => {
  return (
    <Suspense fallback={<LoadingScreen />}>{element}</Suspense>
  )
}

export const routes = [
  {
    path: "/*",
    element: wrapSuspense(<VendorGate element={<VendorRoutes />} />),
  },
  {
    path: "/farmer/*",
    element: wrapSuspense(<FarmerGate element={<FarmerRoutes />} />),
  },
  {
    element: <GuestGate />,
    children: guestRoutes,
  },
  {
    path: "/admin/*",
    element: wrapSuspense(<AdminRoutes />),
  },
  {
    path: "/welcome",
    element: <LandingPage />,
  },
];

export default function MainRoutes() {
  return useRoutes(routes)
}
