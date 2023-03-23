import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import MapPinOutline from "@/icons/heroicons/MapPinOutline";
import { useDemandsQuery } from "@/query/queries/useDemandsQuery";
import { LinkOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Select, Spin } from "antd";
import moment from "moment";
import { Link, useSearchParams } from "react-router-dom";

export default function Demands() {
  const [params] = useSearchParams();
  const crop_id = params.get("crop_id");
  const query = useDemandsQuery({ crop_id });

  // const options = [
  //   {
  //     value: "Ilocos Region",
  //     label: "Ilocos Region",
  //   },
  //   {
  //     value: "Cagayan Valley",
  //     label: "Cagayan Valley",
  //   },
  //   {
  //     value: "Central Luzon",
  //     label: "Central Luzon",
  //   },
  //   {
  //     value: "CALABARZON",
  //     label: "CALABARZON",
  //   },
  //   {
  //     value: "MIMAROPA",
  //     label: "MIMAROPA",
  //   },
  //   {
  //     value: "Bicol Region",
  //     label: "Bicol Region",
  //   },
  //   {
  //     value: "Cordillera Administrative Region",
  //     label: "Cordillera Administrative Region",
  //   },
  //   {
  //     value: "National Capital Region",
  //     label: "National Capital Region",
  //   },
  //   {
  //     value: "Region VI (Western Visayas)",
  //     label: "Region VI (Western Visayas)",
  //   },
  //   {
  //     value: "Region VII (Central Visayas)",
  //     label: "Region VII (Central Visayas)",
  //   },
  //   {
  //     value: "Region VIII (Eastern Visayas)",
  //     label: "Region VIII (Eastern Visayas)",
  //   },
  //   {
  //     value: "Region IX (Zamboanga Peninsula)",
  //     label: "Region IX (Zamboanga Peninsula)",
  //   },
  //   {
  //     value: "Region X (Northern Mindanao)",
  //     label: "Region X (Northern Mindanao)",
  //   },
  //   {
  //     value: "Region XI (Davao Region)",
  //     label: "Region XI (Davao Region)",
  //   },
  //   {
  //     value: "Region XII (SOCCSKSARGEN)",
  //     label: "Region XII (SOCCSKSARGEN)",
  //   },
  //   {
  //     value: "CARAGA Region",
  //     label: "CARAGA Region",
  //   },
  //   {
  //     value: "Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)",
  //     label: "Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)",
  //   },
  // ];

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  if (query.isLoading) {
    return (
      <Page className="bg-white">
        <PageHeader back="/farmer/home" title="Demands" />
        <div className="py-16 flex justify-center">
          <Spin />
        </div>
      </Page>
    );
  }

  return (
    <Page className="bg-white">
      <PageHeader back="/farmer/home" title="Demands" />
      <div className="px-2">
        {/* <Select
          className="mt-4"
          mode="tags"
          placeholder="Please select your desired region"
          // defaultValue={["a10", "c12"]}
          onChange={handleChange}
          style={{ width: "100%" }}
          options={options}
          suffixIcon={<SearchOutlined />}
        /> */}
        {query.data.map((item) => (
          <div
            key={item.id}
            className=" mt-2 rounded border border-[#e5e7eb]  bg-white p-4 py-2 text-base shadow-sm"
          >
            <div className="flex">
              <div className="mr-14 flex flex-row items-center">
                <Avatar size="large" src={item.author.profile_picture}></Avatar>
              </div>
              <div className="flex-auto flex-row">
                <div className="text-center text-lg font-normal text-black">
                  {item.crop.name}
                </div>
                <div className="text-center text-xs font-thin">
                  Commodity <br />
                  Interest
                </div>
              </div>
              <div className="flex-auto flex-row">
                <div className="text-center text-lg font-normal text-black">
                  ₱{item.budget}
                </div>
                <div className="text-center text-xs font-thin">Budget</div>
              </div>
              <div className="flex-auto flex-row">
                <div className="text-center text-lg font-normal text-black">
                  {item.quantity}KG
                </div>
                <div className="text-center text-xs font-thin">
                  Quantity <br />
                  Needed
                </div>
              </div>
            </div>
            <div className=" text-lg text-black">{item.author.fullname}</div>
            <div className="text-left text-sm font-thin text-slate-400">
              <MapPinOutline /> Caloocan City
            </div>
            <div className="text-justify text-sm font-normal">
              {item.description}
            </div>
            <div className="mt-2 flex  justify-between gap-5">
              <Link
                to={"/farmer/messages/" + item.author.id}
                className="flex-grow rounded bg-[#739559] p-1  text-center font-bold text-white"
              >
                <LinkOutlined className="mr-4" />
                Connect
              </Link>
              <div className="text-centers flex items-center text-sm font-thin text-slate-400">
                {moment(item.created_at).fromNow()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
