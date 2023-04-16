import component1 from "../images/Component 1.png";

export default function Banner() {
  return (
    <section className="mx-auto h-screen w-11/12 max-w-6xl">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="mt-10 w-full max-w-lg text-center text-6xl font-bold text-black dark:text-white md:w-1/2 md:text-left ">
          Delivering Fresh Commodities Direct to Your Market.
        </div>
        <div className="">
          <img src={component1} alt="" />
        </div>
      </div>
    </section>
  );
}
