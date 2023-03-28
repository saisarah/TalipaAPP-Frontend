import banner from "../images/bannerUpscaled.png";
import playstore from "../images/playstore.png";
export default function Banner() {
  return (
    <section
      className="absolute mt-[-60px] h-screen w-screen"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" ml-40 mr-40 mt-16 flex ">
        <div className="mt-5 w-[600px] sm:mt-40 ">
          <div className="text-center text-6xl text-black sm:text-left sm:text-6xl">
            <span className="font-thin">Delivering</span>
            <br />
            <span className="font-extrabold">Fresh Commodities</span>
            <br />
            <span className="font-thin">Direct to Your Market.</span>
          </div>
          <div className="mt-10 rounded bg-white p-2 text-center font-normal text-black sm:mt-0 sm:bg-transparent sm:p-0 sm:text-justify sm:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <button className="mt-4 inline-flex min-w-[180px] gap-4 rounded bg-black  ">
            <img src={playstore} alt="" className=" p-2 pl-5" />
            <div className="sm:justify- flex flex-col items-start pr-3   text-white">
              <span className="text-sm font-thin">GET IT ON</span>
              <span className="text-lg  tracking-widest ">Google Play</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
