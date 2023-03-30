import sell from "../images/sell.png";
import truck from "../images/truck.png";
import search from "../images/search.png";
import demands from "../images/demands.png";
export default function Services() {
  return (
    <section
      id="Services"
      className="mx-auto h-auto max-w-7xl  px-4 text-center  sm:px-6 lg:px-8"
    >
      <div className="text-xl font-bold text-black">Platform Features</div>
      <div className=" grid grid-flow-row items-center gap-4 p-4 sm:grid-flow-col">
        <div className="grid grid-flow-row grid-rows-1 items-center justify-center gap-4 sm:grid-flow-col sm:grid-rows-2 ">
          <div className="flex flex-col text-center ">
            <img width="250px" height="250px" src={sell} alt="" />
            <div className=" text-sm text-black">Post Commidty Online</div>
          </div>
          <div className="flex flex-col text-center">
            <img width="250px" height="250px" src={demands} alt="" />

            <div className=" text-sm text-black">Add your Demands</div>
          </div>
          <div className="flex flex-col text-center">
            <img width="250px" height="250px" src={search} alt="" />

            <div className=" text-sm text-black">Search for Commodities</div>
          </div>
          <div className="flex flex-col text-center">
            <img width="250px" height="250px" src={truck} alt="" />

            <div className=" text-sm text-black">Powered by Transportify</div>
          </div>
        </div>
        <div>
          <div className="text-justify">
            Our innovative application provides a platform for farmers to easily
            post their commodities online, and for vendors to easily search for
            the products they need. With the added convenience of our logistics
            partner, Transportify, we ensure that our customers receive fast and
            reliable delivery of their purchases. Additionally, we accept
            payment through GCash, making transactions quick and hassle-free. We
            also take into consideration the demands of our vendors, ensuring
            that they are able to source the products they require to grow their
            businesses. Our goal is to provide a seamless and efficient
            experience for all parties involved in the agricultural supply
            chain.
          </div>
        </div>
      </div>
    </section>
  );
}
