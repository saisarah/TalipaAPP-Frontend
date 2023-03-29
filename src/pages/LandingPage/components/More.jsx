import logo from "../images/Splash.svg";
import home from "../images/home.jpg";
import post from "../images/Untitled-2.png";
import React, { useState, useEffect } from "react";
import { Carousel } from "antd";

export default function More() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className=" mx-auto h-auto w-screen max-w-7xl">
      <div>
        {isSmallScreen ? (
          <div className="">
            <Carousel autoplay>
              <div className="relative h-[700px] max-h-[614px] w-[585px] overflow-hidden bg-[#FDEFDC] p-4">
                <img className=" w-[244px]" src={logo} alt="" />
                <div className="text-4xl font-bold text-black">
                  Freshness is just a farm away - straight to your plate with
                  our market magic!
                </div>
                <button className="mt-10 rounded-sm bg-[#333333] p-1 pl-6 pr-6 text-center text-white">
                  Get The App Now
                </button>
                <div className=" -bottom-30 absolute -right-48 h-[614px]">
                  <img width={"50%"} height={"50%"} src={home} alt="" />
                </div>
              </div>

              <div className="relative h-[614px] w-[332px] overflow-hidden bg-[#FDEFDC] p-4">
                <div className="absolute -right-40 -top-20">
                  <img width={"70%"} height={"50%"} src={post} alt="" />
                </div>
              </div>

              <div
                className="flex h-[614px] w-[332px] items-center
                overflow-hidden bg-[#FDEFDC] p-4 text-right text-5xl font-bold text-black"
              >
                <div>
                  <p>
                    Get <span className="text-[#739559]">more</span> for less -
                    shop commodities with{" "}
                    <span className="text-[#739559]">lower</span> prices
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        ) : (
          <div className=" flex flex-row gap-4">
            <div className="relative h-[700px] max-h-[614px] w-[585px] overflow-hidden bg-[#FDEFDC] p-4">
              <img className=" w-[244px]" src={logo} alt="" />
              <div className="text-4xl font-bold text-black">
                Freshness is just a farm away - straight to your plate with our
                market magic!
              </div>
              <button className="mt-10 rounded-sm bg-[#333333] p-1 pl-6 pr-6 text-center text-white">
                Get The App Now
              </button>
              <div className=" absolute -bottom-11  -right-20">
                <img width={"70%"} height={"50%"} src={home} alt="" />
              </div>
            </div>
            <div className="relative w-[332px] overflow-hidden bg-[#FDEFDC] p-4">
              <div className="absolute -right-40 -top-20">
                <img width={"70%"} height={"50%"} src={post} alt="" />
              </div>
            </div>
            <div className="flex w-[332px] items-center overflow-hidden bg-[#FDEFDC] p-4 text-right text-5xl font-bold text-black">
              <p>
                Get <span className="text-[#739559]">more</span> for less - shop
                commodities with <span className="text-[#739559]">lower</span>{" "}
                prices
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
