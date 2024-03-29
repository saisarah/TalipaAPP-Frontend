import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import banner4 from "../images/banner4.png";
import banner5 from "../images/banner5.png";

export default function Banner() {
  return (
    <section className="mx-auto mb-5 h-auto w-11/12 max-w-6xl md:mb-0 md:h-screen">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="mt-10 w-full max-w-lg text-center font-poppins text-5xl font-bold  text-black dark:text-white md:w-1/2 md:text-left md:text-6xl ">
          Delivering Fresh Commodities Direct to Your Market.
          <div className="mt-10 max-w-xs ">
            <a href="https://github.com/saisarah/TalipaAPP-Frontend/releases/download/v1.0/TalipaAPP_base.apk" download="">
              <button className="flex gap-2 rounded-lg bg-white px-4 py-2 text-sm font-thin text-black  dark:bg-black dark:text-white ">
                Download now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>

        <div className="">
          <div className=" mt-16 skew-y-0 duration-500   ease-in hover:skew-y-0 md:skew-y-[20deg]">
            <div className="flex gap-16">
              <div className="">
                <img src={banner1} alt="" className="h-full w-full" />
              </div>
              <div className="">
                <img src={banner2} alt="" className="h-full w-full" />
              </div>
            </div>
            <div
              className="-mt-24
             ml-10"
            >
              <img src={banner3} alt="" />
            </div>

            <div className="-mt-10  flex gap-6 md:-mt-32 md:gap-16">
              <div>
                <img src={banner4} alt="" />
              </div>
              <div>
                <img src={banner5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
