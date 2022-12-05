import { Navigate, Outlet } from "react-router-dom";
import useCurrentUserQuery from "../query/queries/useCurrentUserQuery";
import SplashScreen from "./SplashScreen";


export default function FarmerGate()
{
    const { isLoading, isError, data:user } = useCurrentUserQuery()

    if (isLoading) {
        return <SplashScreen />
    }

    if (isError || user.user_type !== 'farmer') {
        return <Navigate to="/login" />
    }
    
    return <Outlet/>
}