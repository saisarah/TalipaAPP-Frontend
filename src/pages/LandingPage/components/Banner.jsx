import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import banner4 from "../images/banner4.png";
import banner5 from "../images/banner5.png";

export default function Banner() {
  return (
    <section className="mx-auto h-screen w-11/12 max-w-6xl">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="mt-10 w-full max-w-lg text-center font-poppins text-5xl font-bold  text-black dark:text-white md:w-1/2 md:text-left md:text-6xl ">
          Delivering Fresh Commodities Direct to Your Market.
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
