import { useState } from "react";

export default function FAQ() {
  const [expanded, setExpanded] = useState();
  const [expanded1, setExpanded1] = useState();
  const [expanded2, setExpanded2] = useState();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleExpand1 = () => {
    setExpanded1(!expanded1);
  };

  const toggleExpand2 = () => {
    setExpanded2(!expanded2);
  };
  return (
    <section className="mx-auto mt-28 h-auto w-11/12 max-w-6xl">
      <div className="text-5xl font-bold text-black dark:text-white">
        Frequently ask questions
      </div>
      <div className="mt-2 max-w-md text-black dark:text-white">
        Here are some of the most frequent questions we get asked. Got more
        questions? Visit out Help centre.
      </div>
      <div className="flex flex-col justify-center gap-10 px-2 py-20 md:p-20 ">
        <div className="w-full rounded-lg bg-opacity-30  bg-gradient-to-r from-[#d8f3dc56]  p-0.5 shadow-lg">
          <div
            className={`h-full w-full rounded-lg p-4 transition-all duration-300 ${
              expanded ? "bg-transparent" : "bg-white dark:bg-[#212529]"
            }`}
          >
            <div className="flex flex-row items-center justify-between align-middle  ">
              <h2 className="text-lg font-medium  text-black dark:text-white">
                How to register in TalipaApp?
              </h2>
              <button className="focus:outline-none" onClick={toggleExpand}>
                {expanded ? (
                  <svg
                    className="h-5 w-5 fill-current text-[#B7E4C7]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 fill-current text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 11H13V5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`mt-2 max-h-0 overflow-hidden  transition-all duration-300   ${
                expanded ? "max-h-screen" : ""
              }`}
            >
              <p className="leading-relaxed ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquam mauris sit amet orci faucibus, non suscipit quam
                consectetur. Nulla laoreet velit velit, vel tincidunt felis
                imperdiet eget. Fusce eleifend massa et interdum faucibus.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-lg bg-opacity-30  bg-gradient-to-r from-[#d8f3dc56]  p-0.5 shadow-lg">
          <div
            className={`h-full w-full rounded-lg p-4 transition-all duration-300 ${
              expanded1 ? "bg-transparent" : "bg-white dark:bg-[#212529]"
            }`}
          >
            <div className="flex flex-row items-center justify-between align-middle  ">
              <h2 className="text-lg font-medium  text-black dark:text-white">
                Can i choose the courier who will deliver my order?
              </h2>
              <button className="focus:outline-none" onClick={toggleExpand1}>
                {expanded1 ? (
                  <svg
                    className="h-5 w-5 fill-current text-[#B7E4C7]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 fill-current text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 11H13V5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`mt-2 max-h-0 overflow-hidden  transition-all duration-300   ${
                expanded1 ? "max-h-screen" : ""
              }`}
            >
              <p className="leading-relaxed ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquam mauris sit amet orci faucibus, non suscipit quam
                consectetur. Nulla laoreet velit velit, vel tincidunt felis
                imperdiet eget. Fusce eleifend massa et interdum faucibus.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-lg bg-opacity-30  bg-gradient-to-r from-[#d8f3dc56]  p-0.5 shadow-lg">
          <div
            className={`h-full w-full rounded-lg p-4 transition-all duration-300 ${
              expanded2 ? "bg-transparent" : "bg-white dark:bg-[#212529]"
            }`}
          >
            <div className="flex flex-row items-center justify-between align-middle  ">
              <h2 className="text-lg font-medium  text-black dark:text-white">
                How do I buy commodity?
              </h2>
              <button className="focus:outline-none" onClick={toggleExpand2}>
                {expanded2 ? (
                  <svg
                    className="h-5 w-5 fill-current text-[#B7E4C7]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 fill-current text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 11H13V5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`mt-2 max-h-0 overflow-hidden  transition-all duration-300   ${
                expanded2 ? "max-h-screen" : ""
              }`}
            >
              <p className="leading-relaxed ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquam mauris sit amet orci faucibus, non suscipit quam
                consectetur. Nulla laoreet velit velit, vel tincidunt felis
                imperdiet eget. Fusce eleifend massa et interdum faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
