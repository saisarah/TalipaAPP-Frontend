import SplashScreen from "@/components/SplashScreen/SplashScreen";
import useCurrentUserQuery from "@/query/queries/useCurrentUserQuery";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestGate() {
  const { isLoading, data: user } = useCurrentUserQuery();

  if (isLoading) {
    return <SplashScreen />;
  }

  if (user === null) return <Outlet />;

  if (user.user_type === "farmer") return <Navigate to="/farmer" />;

  if (user.user_type === "vendor") return <Navigate to="/" />;

  throw "Unknown user type";
}
