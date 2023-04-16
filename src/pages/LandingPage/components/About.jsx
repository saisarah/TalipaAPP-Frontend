import image2 from "../images/image2.png";
import bg2 from "../images/Component2.svg";
export default function About() {
  return (
    <>
      <section className="mx-auto mt-28 h-auto w-11/12 max-w-6xl md:mt-0">
        <div className="text-5xl font-bold text-black dark:text-white">
          About
        </div>
        <div className="text-7xl font-bold text-black dark:text-white">
          <span className="text-[#86BF88]">Talipa</span>
          <span className="text-black dark:text-white">App</span>
        </div>

        <div className="flex flex-col gap-4 text-center  md:flex-row">
          <div className="mt-10 w-full  p-4  md:w-1/2">
            <img src={image2} alt="" className="h-auto w-56" />
          </div>
          <div className="mt-10 w-full p-4  md:w-1/2">
            <div className="flex flex-col gap-3 md:gap-14">
              <div className="text-dark  text-2xl font-medium dark:text-white">
                "TalipaApp is a marketplace for fresh produce and goods,
                inspired by the concept of talipapa markets found in residential
                areas of the Philippines."
              </div>
              <div className=" text-base font-normal text-black dark:text-white">
                It all starts with an idea: to address the issue of middlemen
                tripling the prices of commodities sold in the market. Our team
                set out to create an app that connects local farmers and vendors
                directly with consumers, cutting out the middleman and making
                goods more affordable for everyone.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <img src={bg2} alt="" />
      </div>
    </>
  );
}
