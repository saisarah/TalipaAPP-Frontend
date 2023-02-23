import guestRoutes from "./guestRoutes";
import FarmerGate from "./gates/FarmerGate";
import VendorGate from "./gates/VendorGate";
import GuestGate from "./gates/GuestGate";

import { lazy, Suspense } from "react";

const FarmerRoutes = () => import("./FarmerRoutes");
const AdminRoutes = () => import("./AdminRoutes");
const VendorRoutes = () => import("./VendorRoutes");

const lazyLoadRoutes = (routes) => {
  const LazyElement = lazy(routes);
  return (
    <Suspense fallback={"Lazy loading"}>
      <LazyElement />
    </Suspense>
  );
};

export default [
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
