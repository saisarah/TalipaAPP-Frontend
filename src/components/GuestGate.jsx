import { Navigate, Outlet } from "react-router-dom";
import useCurrentUserQuery from "../query/queries/useCurrentUserQuery";
import SplashScreen from "./SplashScreen";

export default function GuestGate() {
  const { isLoading, isError, data: user, isSuccess } = useCurrentUserQuery();

  if (isLoading) {
    return <SplashScreen />;
  }

  if (isSuccess && user.user_type === "farmer")
    return <Navigate to="/farmer" />;

  if (isSuccess && user.user_type === "vendor")
    return <Navigate to="/" />;

  return <Outlet />;
}
