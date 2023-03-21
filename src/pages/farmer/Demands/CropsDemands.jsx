import UserOutlined from "@/icons/heroicons/UserOutlined";
import {
  AntDesignOutlined,
  ArrowUpOutlined
} from "@ant-design/icons";
import { Alert, Avatar, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { dataCommodities } from "./post-data";

export const CropsDemands = () => {
  return (
    <div className="bg-white p-2">
      <Alert
        message="Find Your Market Opportunities—top products currently in demand, the percentage  shows the proportion of each vendor's total demand that is attributed to each commodity. Click it to see more details."
        type="info"
        showIcon
        closable
      />

      {dataCommodities.map((item) => (
        <Link to="/farmer/demand-list" key={item.key}>
          <div className="mt-2 rounded border border-[#e5e7eb] p-4 py-2 text-base shadow-sm">
            <div className="flex justify-between">
              <div className="text-xl font-bold leading-tight text-black ">
                {item.commodities} <br />
                <span className="text-sm font-thin text-slate-400">
                  Requested commodity
                </span>
              </div>
              <div className="px-6 pt-1 text-4xl font-bold text-black">
                {item.percentage}%
              </div>
            </div>

            <div className="flex justify-between  border-b-2 py-2 ">
              <div className="">
                <Avatar.Group
                  className="align-middle"
                  maxCount={4}
                  maxPopoverTrigger="click"
                  size="large"
                  maxStyle={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer",
                  }}
                >
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

                  <Avatar style={{ backgroundColor: "#f56a00" }}>J</Avatar>
                  <Avatar src="" />
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{ backgroundColor: "#87d068" }}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>

                  <Avatar
                    style={{ backgroundColor: "#1890ff" }}
                    icon={<AntDesignOutlined />}
                  />
                </Avatar.Group>
              </div>
              <div className="pt-2 text-sm font-thin text-black">
                Requested by N vendors
              </div>
            </div>
            <div className="w-full pt-2 text-right">
              <button className="rounded border px-2 font-normal text-black">
                View Demands
                <ArrowUpOutlined className="ml-2 rotate-45" />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
