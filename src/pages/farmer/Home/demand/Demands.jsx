import { Alert, Avatar, Table, Tooltip } from "antd";
import { columns, data } from "@/components/Demands/post-data";
import Page from "@/components/Page";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { AntDesignOutlined } from "@ant-design/icons";

export const Demands = () => {
  return (
    <Page className="bg-white p-2">
      <Alert
        message="Find Your Market Opportunities—top products currently in demand, the percentage  shows the proportion of each vendor's total demand that is attributed to each commodity. Click it to see more details."
        type="info"
        showIcon
        closable
      />
      <div className="border border-x-0 border-b border-t-0 border-slate-100 p-2">
        <div className="flex flex-row items-center">
          <div className="grow text-lg font-bold text-black">Mango</div>
          <Avatar.Group
            className="grow justify-center"
            maxCount={3}
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
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
          <div className="grow text-center text-slate-500">70%</div>
        </div>
      </div>
      <div className="border border-x-0 border-b border-t-0 border-slate-100 p-2">
        <div className="flex flex-row items-center">
          <div className="grow text-lg font-bold text-black">Eggplant</div>
          <Avatar.Group
            className="grow justify-center"
            maxCount={3}
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
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
          <div className="grow text-center text-slate-500">80%</div>
        </div>
      </div>
      <div className="border border-x-0 border-b border-t-0 border-slate-100 p-2">
        <div className="flex flex-row items-center">
          <div className="grow text-lg font-bold text-black">Pinapple</div>
          <Avatar.Group
            className="grow justify-center"
            maxCount={3}
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
          <div className="grow text-center text-slate-500">90%</div>
        </div>
      </div>
      {/* <Table
        className="justify-center text-center"
        dataSource={dataCommodities}
        columns={columnsCommodities}
        pagination={false}
      /> */}
      <Table columns={columns} dataSource={data} />;
    </Page>
  );
};
