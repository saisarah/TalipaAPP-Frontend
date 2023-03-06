import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { FarmerContextProvider } from "@/contexts/FarmerContext";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Navigate } from "react-router-dom";

export default function FarmerGate({ children }) {
  const { isLoading, isError, data: user } = useCurrentUserQuery();

  if (isLoading) {
    return <SplashScreen />;
  }

  if (user === null || user.user_type !== "farmer") {
    return <Navigate to="/login" />;
  }

  return <FarmerContextProvider user={user}>{children}</FarmerContextProvider>;
}
