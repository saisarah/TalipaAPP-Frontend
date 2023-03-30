import banner from "../images/bannerUpscaled.png";
import playstore from "../images/playstore.png";
export default function Banner() {
  return (
    <section
      id="Home"
      className="relative z-20 h-screen w-screen"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto mt-2 flex  max-w-7xl px-4 text-center sm:px-6 sm:text-left lg:px-8">
        <div className="mt-24  w-full sm:mt-20 ">
          <div className="  text-5xl text-black sm:text-left sm:text-6xl">
            <span className="font-thin">Delivering</span>
            <br />
            <span className="font-extrabold">Fresh Commodities</span>
            <br />
            <span className="font-thin">Direct to Your Market.</span>
          </div>
          <div className="mt-2 ml-2 mr-2 w-full  bg-white  text-black sm:w-[600px] sm:bg-transparent ">
            Want to save money while supporting your local community? TalipaApp
            has got you covered! With TalipaApp, you can feel good about your
            purchases while keeping more money in your pocket. Say goodbye to
            overpriced products and download TalipaApp today!
          </div>
          <button className="mt-4 inline-flex min-w-[180px] gap-4 rounded bg-black text-white duration-300 ease-linear hover:bg-white  hover:text-black">
            <img
              src={playstore}
              alt=""
              className=" p-2 pl-5 hover:text-black"
            />
            <div className="sm:justify- flex flex-col items-start pr-3">
              <span className="text-sm font-thin">GET IT ON</span>
              <span className="text-lg  tracking-widest ">Google Play</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
