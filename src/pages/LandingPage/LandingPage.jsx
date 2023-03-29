import { useAppContext } from "@/contexts/AppContext";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import More from "./components/More";
import Navabar from "./components/Navbar";
import Services from "./components/Services";

export default function LandingPage() {
  const { data: user } = useCurrentUserQuery();
  const { isAndroid } = useAppContext();

  if (user) return <Navigate to="/home" replace />;

  if (isAndroid) return <Navigate to="/login" replace />;

  return (
    <Fragment>
      <Navabar />
      <Banner />
      <About />
      <Services />
      <More />
      <Contact />
    </Fragment>
  );
}
