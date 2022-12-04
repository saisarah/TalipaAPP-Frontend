import { Navigate, Outlet } from "react-router-dom";
import useCurrentUserQuery from "../query/queries/useCurrentUserQuery";
import SplashScreen from "./SplashScreen";


export default function VendorGate()
{
    const { isLoading, error, data } = useCurrentUserQuery()

    if (isLoading) {
        return <SplashScreen />
    }

    if (error) {
        return <Navigate to="/login" />
    }

    return <Outlet/>
}