import { Navigate, Outlet } from "react-router-dom";
import useCurrentUserQuery from "../query/queries/useCurrentUserQuery";
import SplashScreen from "./SplashScreen";


export default function VendorGate()
{
    const { isLoading, isError, data:user } = useCurrentUserQuery()

    if (isLoading) {
        return <SplashScreen />
    }

    if (user === null || user.user_type !== 'vendor') {
        return <Navigate to="/login" />
    }
    
    return <Outlet/>
}