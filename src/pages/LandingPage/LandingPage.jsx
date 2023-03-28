import { useAppContext } from "@/contexts/AppContext";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { useQueryClient } from "@tanstack/react-query";
import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Navabar from "./components/Navbar";

export default function LandingPage() {
  const { data: user } = useCurrentUserQuery()
  const { isAndroid } = useAppContext()

  if (user)
    return <Navigate to="/home" replace />

  if (isAndroid) 
    return <Navigate to="/login" replace />

  return (
    <Fragment>
      <Navabar />
      <Banner />
      <div style={{ marginTop: "calc(100vh - 60px)" }}>
        <About />
      </div>
    </Fragment>
  );
}
