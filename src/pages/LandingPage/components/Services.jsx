import sample from "../images/sample picture1.png";
import cardbg from "../images/cardbg.png";
import gcash from "../images/gcash.png";
import trans from "../images/transportify.png";
import elipse from "../images/hoverElipse.png";
import { useState } from "react";
export default function Services() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <>
      <section className="max-w-6xls mx-auto h-auto w-11/12">
        <div className="mt-16 flex flex-col items-center gap-2 text-center">
          <div className="text-5xl font-bold text-black dark:text-white">
            Platform Features
          </div>
          <div className="max-w-lg">
            TalipaApp streamlines the agricultural supply chain by connecting
            farmers and vendors on one platform, with reliable delivery through
            Transportify and hassle-free transactions via GCash.
          </div>
        </div>

        <div className="mt-20 grid grid-flow-row gap-4 md:grid-flow-col">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="duration-500 ease-in"
          >
            <div
              className="relative z-10 h-[480px] rounded-md p-2 duration-300 ease-in hover:scale-105"
              style={{
                backgroundImage: `url(${cardbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full">
                <img src={sample} alt="" className="h-full w-full" />
              </div>

              <div className="p-2">
                <h2 className="text-lg font-medium">Post Commodity Online</h2>
                <p className="mt-5 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  faucibus justo eu felis tincidunt, a hendrerit lorem volutpat.
                  Proin ultrices quam libero, a posuere est facilisis sed.
                </p>
              </div>
              {isHovered && (
                <img src={elipse} alt="" className="absolute scale-[2.5] " />
              )}
            </div>
          </div>

          <div
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            className="duration-500 ease-in"
          >
            <div
              className="relative z-10 h-[480px] rounded-md p-2 duration-300 ease-in hover:scale-105"
              style={{
                backgroundImage: `url(${cardbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full">
                <img src={sample} alt="" className="h-full w-full" />
              </div>

              <div className="p-2">
                <h2 className="text-lg font-medium">Post Commodity Online</h2>
                <p className="mt-5 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  faucibus justo eu felis tincidunt, a hendrerit lorem volutpat.
                  Proin ultrices quam libero, a posuere est facilisis sed.
                </p>
              </div>
              {isHovered1 && (
                <img src={elipse} alt="" className="absolute  scale-[2.5] " />
              )}
            </div>
          </div>

          <div
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className="duration-500 ease-in"
          >
            <div
              className="relative z-10 h-[480px] rounded-md p-2 duration-300 ease-in hover:scale-105"
              style={{
                backgroundImage: `url(${cardbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full">
                <img src={sample} alt="" className="h-full w-full" />
              </div>

              <div className="p-2">
                <h2 className="text-lg font-medium">Post Commodity Online</h2>
                <p className="mt-5 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  faucibus justo eu felis tincidunt, a hendrerit lorem volutpat.
                  Proin ultrices quam libero, a posuere est facilisis sed.
                </p>
              </div>
              {isHovered2 && (
                <img src={elipse} alt="" className="absolute scale-[2.5] " />
              )}
            </div>
          </div>

          <div
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            className="duration-500 ease-in"
          >
            <div
              className="relative z-10 h-[480px] rounded-md p-2 duration-300 ease-in hover:scale-105"
              style={{
                backgroundImage: `url(${cardbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full">
                <img src={sample} alt="" className="h-full w-full" />
              </div>

              <div className="p-2">
                <h2 className="text-lg font-medium">Post Commodity Online</h2>
                <p className="mt-5 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  faucibus justo eu felis tincidunt, a hendrerit lorem volutpat.
                  Proin ultrices quam libero, a posuere est facilisis sed.
                </p>
              </div>
              {isHovered3 && (
                <img src={elipse} alt="" className="absolute  scale-[2.5] " />
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-center gap-28 align-middle">
          <div>
            <img src={gcash} alt="" className="h-auto w-12" />
          </div>
          <div>
            <img src={trans} alt="" className="h-auto w-48" />
          </div>
        </div>
      </section>
    </>
  );
}
