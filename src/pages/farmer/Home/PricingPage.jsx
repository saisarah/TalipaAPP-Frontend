import UserOutlined from "@/icons/heroicons/UserOutlined";
import { Avatar } from "antd";
import elipses from "./images/elipses.png";
import elipses2 from "./images/elipses2.png";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function PricingPage() {
  return (
    <div className="h-screen overflow-hidden rounded-lg bg-white p-10 lg:h-auto lg:border lg:border-slate-300">
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-3 ">
        {/* first card */}
        <div className="relative h-auto w-full overflow-hidden rounded-lg border border-slate-300 p-4">
          <div className="text-base font-bold">Quantities</div>
          <div className="flex justify-between text-center">
            <div>Commodity</div>
            <div className="leading-3">
              Quantity
              <br />
              <span className="text-xs font-thin">(Kilogram/Pieces)</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between text-center">
            <div className="flex items-center gap-2">
              <Avatar size="large" icon={<UserOutlined />} />
              <div>Onion </div>
            </div>
            <div className="mr-3 font-bold leading-3">21309 KG</div>
          </div>

          <div className="absolute bottom-2 left-0">
            <img src={elipses} alt="" />
          </div>
        </div>
        {/* end of first card */}

        {/* second card */}
        <div className="relative h-auto w-full overflow-hidden rounded-lg border border-slate-300 p-4">
          <div className="text-base font-bold">
            Your commodity interest and suggested price
          </div>

          <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-2 rounded-lg bg-black p-1">
              <div className="flex items-center text-sm font-bold text-white">
                Pineapple
              </div>
              <div className="text-center text-base font-bold leading-3 text-[#86BF88]">
                P200 <br />
                <span className="text-[10px] font-thin text-white">Per KG</span>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-2">
            <img src={elipses2} alt="" />
          </div>
        </div>

        {/* end of second card */}

        {/* side card */}
        <div className="row-span-1 h-auto w-full rounded-lg  border border-slate-300 p-4 md:row-span-2">
          <div className="text-base font-bold">
            Top Commodities by Demand Location
          </div>

          <div className="mt-5 grid grid-flow-row gap-2">
            <div className="flex w-full justify-between rounded-md bg-[#B7E4C7] bg-opacity-20 px-2 py-1">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 text-[#1B4332]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="font-bold">Location number one</span>
              </div>
              <div>Onion</div>
            </div>
          </div>
        </div>

        {/* end of side card */}

        <div className="col-span-1 w-full rounded-lg border border-slate-300 p-4 md:col-span-2">
          <span>
            <ExclamationCircleOutlined className="text-blue-600" />
            This table provides information on commodity names, their average
            price range based on posted prices, and the total demands for each
            commodity.
          </span>
          <table className="w-full table-auto border-spacing-1">
            <thead>
              <tr>
                <th className="text-left text-base font-bold">Commodity</th>
                <th className="px-4 py-2 text-center text-base font-bold">
                  Price Range
                </th>
                <th className=" px-4 py-2 text-center text-base font-bold">
                  Total of Demands
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full border border-l-0 border-r-0">
                <td className=" flex  py-2 text-left">
                  <div className="flex items-center gap-4">
                    <Avatar
                      shape="square"
                      size="large"
                      icon={<UserOutlined />}
                    />
                    <div className="">Onion</div>
                  </div>
                </td>
                <td className=" px-4 py-2 text-center">
                  <span className="font-bold text-[#1B4332]">P421</span> per
                  kilogram
                </td>
                <td className="px-4 py-2 text-center font-semibold">231</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
