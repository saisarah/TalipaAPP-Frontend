import PageHeader from "@/components/PageHeader";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";

export default function Chat() {
  const App = () => (
    <Space size="middle">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge
        count={
          <ClockCircleOutlined
            style={{
              backgroundColor: "#52c41a",
            }}
          />
        }
      >
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  );

  return (
    <div className="app-size bg-gray-100">
      <PageHeader back="/farmer" title="Chat" />

      <div className="flex pt-2 mx-2">
        <div className="flex grow flex-row rounded-md bg-white shadow-sm">
          <div className="flex justify-center p-4">
            <Space size="middle">
              <Badge className="" count={7}>
                <Avatar
                  className="border border-green-500"
                  shape="rounded"
                  size="large"
                />
              </Badge>
            </Space>
            <div className="flex flex-col p-2 text-xs">
              <span className="ml-2 font-bold">
                {" "}
                Bagong Silang Market Caloocan City.
              </span>
              <span className="ml-2"> 8:14 am</span>
              <span className="ml-2">[Order Confirmation]</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-2 mx-2">
        <div className="flex grow flex-row rounded-md bg-white shadow-sm">
          <div className="flex justify-center p-4">
            <Space size="middle">
              <Badge className="" count={0}>
                <Avatar
                  className="border border-green-500"
                  shape="rounded"
                  size="large"
                />
              </Badge>
            </Space>
            <div className="flex flex-col p-2 text-xs">
              <span className="ml-2 font-bold">
                {" "}
                Commonwealt Market Quezon City.
              </span>
              <span className="ml-2"> 12 hours</span>
              <span className="ml-2">[Order Confirmation]</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-2 mx-2">
        <div className="flex grow flex-row rounded-md bg-white shadow-sm">
          <div className="flex justify-center p-4">
            <Space size="middle">
              <Badge className="" count={1}>
                <Avatar
                  className="border border-green-500"
                  shape="rounded"
                  size="large"
                />
              </Badge>
            </Space>
            <div className="flex flex-col p-2 text-xs">
              <span className="ml-2 font-bold">
                {" "}
                Vetable Farm Maycauyan bulacan.
              </span>
              <span className="ml-2"> Yesterday</span>
              <span className="ml-2">On delivery na sir</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
