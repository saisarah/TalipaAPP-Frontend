import { Fragment } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Navabar from "./components/Navbar";

export default function LandingPage() {
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
