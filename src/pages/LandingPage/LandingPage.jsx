import { useAppContext } from "@/contexts/AppContext";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Fragment, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Services from "./components/Services";
import darkbg from "./images/Banner.png";
import lightbg from "./images/light.svg";
import logo from "./images/tree.png";
import FAQ from "./components/FAQ";
import Developers from "./components/Developers";
import Footer from "./components/Footer";

import footerBg from "./images/footerBg.png";

export default function LandingPage() {
  const { data: user } = useCurrentUserQuery();
  const { isAndroid } = useAppContext();
  const [theme, setTheme] = useState();

  if (user) return <Navigate to="/home" replace />;

  if (isAndroid) return <Navigate to="/login" replace />;

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className="h-7 w-7"
    >
      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFEA2C" stopOpacity="1" />
        <stop offset="100%" stopColor="#FFA800" stopOpacity="1" />
      </linearGradient>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        stroke="url(#gradient)"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="url(#moon-gradient)"
      className="h-6 w-6"
    >
      <defs>
        <linearGradient id="moon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <>
      <div className="font-inter relative min-h-screen overflow-hidden bg-white text-stone-900 dark:bg-[#212529] dark:text-stone-300">
        <section
          style={{
            backgroundImage: `url(${theme === "dark" ? darkbg : lightbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-11/12 max-w-6xl">
            <nav className="bg-transparent">
              <div className="flex h-24 items-center justify-between">
                {/* <!-- Logo --> */}
                <Link className="flex-shrink-0">
                  <img className="h-auto w-[30px]" src={logo} alt="Logo" />
                </Link>

                <div className="flex justify-between gap-10">
                  <Link to="/login">
                    <button className="font-sm px-4 text-md text-[#AFAFAF] duration-75 ease-in hover:font-bold hover:text-black dark:hover:text-white">
                      Log in
                    </button>
                  </Link>

                  <button type="button" onClick={handleThemeSwitch}>
                    {theme === "dark" ? sun : moon}
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <Banner />
        </section>

        <About />
        <Services />
        <FAQ />
        <Developers />
        <Footer />
        <div className="absolute right-0 -bottom-80 z-0 md:-bottom-[700px] ">
          <img src={footerBg} alt="" />
        </div>
      </div>
    </>
  );
}
