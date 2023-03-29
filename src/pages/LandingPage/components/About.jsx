import vector2 from "../images/vector2.png";
import React, { useState, useEffect } from "react";
export default function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      id="About"
      className="mx-auto  flex h-screen w-screen
     max-w-7xl items-start overflow-hidden  px-4 text-center  sm:items-center "
    >
      <div>
        {isSmallScreen ? (
          <div className="h-full">
            <div className="relative mt-10">
              <div className="absolute z-20 p-4 text-3xl font-bold text-black">
                A Brief History of Our App's Origin: From Idea to Launch.
                <div className="mt-10  text-justify text-sm font-normal">
                  Discover the fascinating story of how our app comes to life!
                  It all starts with an idea: to address the issue of middlemen
                  tripling the prices of commodities sold in the market. Our
                  team set out to create an app that connects local farmers and
                  vendors directly with consumers, cutting out the middleman and
                  making goods more affordable for everyone. Over months of hard
                  work and dedication, our team of developers, designers, and
                  researchers collaborates tirelessly to bring our idea to
                  fruition. We face challenges along the way, but our passion
                  and commitment to the cause keep us going. Finally, the day
                  arrives when we are ready to launch TalipaApp to the world. We
                  are thrilled to see the positive impact it has on both
                  consumers and local farmers alike. Today, we are proud to say
                  that TalipaApp continues to grow and thrive, connecting local
                  farmers and vendors directly with consumers and providing
                  affordable, high-quality goods while supporting our local
                  communities.
                </div>
              </div>

              <div className="z-0 ml-[125px] mt-[-50px] w-full  opacity-50">
                <img src={vector2} alt="" className=" h-[389px] w-[408px] " />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-flow-col ">
            <div>
              <img src={vector2} alt="" />
            </div>
            <div>
              <div className="text-right text-4xl font-bold text-black ">
                A Brief History of Our App's Origin: From Idea to Launch.
              </div>
              <div className=" mt-10 text-right">
                Discover the fascinating story of how our app comes to life! It
                all starts with an idea: to address the issue of middlemen
                tripling the prices of commodities sold in the market. Our team
                set out to create an app that connects local farmers and vendors
                directly with consumers, cutting out the middleman and making
                goods more affordable for everyone. Over months of hard work and
                dedication, our team of developers, designers, and researchers
                collaborates tirelessly to bring our idea to fruition. We face
                challenges along the way, but our passion and commitment to the
                cause keep us going. Finally, the day arrives when we are ready
                to launch TalipaApp to the world. We are thrilled to see the
                positive impact it has on both consumers and local farmers
                alike. Today, we are proud to say that TalipaApp continues to
                grow and thrive, connecting local farmers and vendors directly
                with consumers and providing affordable, high-quality goods
                while supporting our local communities.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
