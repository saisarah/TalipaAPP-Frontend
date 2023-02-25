import guestRoutes from "./guestRoutes";
import FarmerGate from "./gates/FarmerGate";
import VendorGate from "./gates/VendorGate";
import GuestGate from "./gates/GuestGate";

import { cloneElement, lazy, Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";

const FarmerRoutes = () => import("./FarmerRoutes/FarmerRoutes");
const AdminRoutes = () => import("./AdminRoutes");
const VendorRoutes = () => import("./VendorRoutes");

const lazyLoadRoutes = (routes) => {
  const LazyElement = lazy(routes);
  return (
    <ErrorBoundary>
      <Suspense fallback={"Lazy loading"}>
        <LazyElement />
      </Suspense>
    </ErrorBoundary>
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
  const Routes = useRoutes(routes);
  const location = useLocation();

  if (!Routes) return null;

  return (
    <AnimatePresence mode="wait">
      {cloneElement(Routes, { key: location.pathname })}
    </AnimatePresence>
  );
}
