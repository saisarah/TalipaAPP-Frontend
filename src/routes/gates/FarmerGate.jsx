import SplashScreen from "@/components/SplashScreen";
import useCurrentUserQuery from "@/query/queries/useCurrentUserQuery";
import { Navigate, Outlet } from "react-router-dom";


export default function FarmerGate()
{
    const { isLoading, isError, data:user } = useCurrentUserQuery()

    if (isLoading) {
        return <SplashScreen />
    }

    if (user === null || user.user_type !== 'farmer') {
        return <Navigate to="/login" />
    }
    
    return <Outlet/>
}