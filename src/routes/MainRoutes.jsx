import guestRoutes from "./guestRoutes";
import FarmerGate from "./gates/FarmerGate";
import VendorGate from "./gates/VendorGate";
import GuestGate from "./gates/GuestGate";

import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const FarmerRoutes = () => import("./FarmerRoutes/FarmerRoutes");
const AdminRoutes = () => import("./AdminRoutes");
const VendorRoutes = () => import("./VendorRoutes");

const lazyLoadRoutes = (routes) => {
  const LazyElement = lazy(routes);
  return (
    <Suspense
      fallback={
        <div>
          <LoadingScreen />
        </div>
      }
    >
      <LazyElement />
    </Suspense>
  );
};

const routes = [
  {
    path: "/*",
    element: <VendorGate>{lazyLoadRoutes(VendorRoutes)}</VendorGate>,
  },
  {
    path: "/farmer/*",
    element: <FarmerGate>{lazyLoadRoutes(FarmerRoutes)}</FarmerGate>,
  },
  {
    element: <GuestGate />,
    children: guestRoutes,
  },
  {
    path: "/admin/*",
    element: lazyLoadRoutes(AdminRoutes),
  },
];

export default function MainRoutes() {
  return useRoutes(routes);
}
