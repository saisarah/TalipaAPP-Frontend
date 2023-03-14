import { Alert, Avatar, Button, Input, Space, Table, Tag, Tooltip } from "antd";
import Page from "@/components/Page";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { AntDesignOutlined, RightOutlined } from "@ant-design/icons";
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

      <div className="p-4">
        <table className="w-full table-auto">
          <thead className="bottom-1 mx-2 border border-x-0 border-t-0 ">
            <tr className="">
              <th className=" text-left text-lg font-normal">Commodity</th>
              <th></th>
              <th className="text-lg font-normal ">Percentage</th>
              <th className="text-right"></th>
            </tr>
          </thead>
          <tbody className="">
            {dataCommodities.map((item) => (
              <Link
                className="table-row w-full shadow-sm hover:bg-slate-100 hover:bg-opacity-50 "
                key={item.key}
              >
                <td className="py-2 text-left text-lg font-bold text-black ">
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
      </div>
    </Page>
  );
};
