import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { VendorContextProvider } from "@/contexts/VendorContext";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Navigate } from "react-router-dom";

export default function VendorGate({ element }) {
  const { isLoading, isError, data: user } = useCurrentUserQuery();

  if (isLoading) {
    return <SplashScreen />;
  }

  if (user === null || user.user_type !== "vendor") {
    return <Navigate to="/login" />;
  }

  return <VendorContextProvider user={user}>{element}</VendorContextProvider>;
}
