import { Alert, Avatar, Button, Input, Space, Table, Tag, Tooltip } from "antd";
import Page from "@/components/Page";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import {
  AntDesignOutlined,
  ArrowUpOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { dataCommodities } from "./post-data";
import { Link } from "react-router-dom";

export const Demands = () => {
  return (
    <Page className="bg-white p-2">
      <Alert
        message="Find Your Market Opportunities—top products currently in demand, the percentage  shows the proportion of each vendor's total demand that is attributed to each commodity. Click it to see more details."
        type="info"
        showIcon
        closable
      />

      {/* <div className="p-4">
        <table className="w-full table-auto">
          <thead className="bottom-1 mx-2 border border-x-0 border-t-0 ">
            <tr className="">
              <th className="text-left text-sm font-bold ">Commodity</th>
              <th></th>
              <th className="text-sm font-bold ">Percentage</th>
              <th className="text-right"></th>
            </tr>
          </thead>
          <tbody className="">
            {dataCommodities.map((item) => (
              <Link
                className="table-row w-full shadow-sm hover:bg-slate-100 hover:bg-opacity-50 "
                key={item.key}
              >
                <td className="py-2 text-left text-lg font-normal text-black ">
                  {item.commodities}
                </td>
                <td className=" py-2 text-center">
                  <Avatar.Group
                    className="align-middle"
                    maxCount={3}
                    maxPopoverTrigger="click"
                    size="medium"
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
                </td>
                <td className="py-2 text-center">
                  {item.percentage >= 50 ? (
                    <Tag color="green">{item.percentage}%</Tag>
                  ) : (
                    <Tag color="red">{item.percentage}%</Tag>
                  )}
                </td>
                <td className="py-2 text-right">
                  <RightOutlined className="text-left" />
                </td>
              </Link>
            ))}
          </tbody>
        </table>
      </div> */}

      {dataCommodities.map((item) => (
        <Link key={item.key}>
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
    </Page>
  );
};
