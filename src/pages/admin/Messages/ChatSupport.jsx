import UserOutlined from "@/icons/heroicons/UserOutlined";
import {
  AudioOutlined,
  ClockCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Input, Space } from "antd";
import React from "react";

function User({ name, chat, email, time }) {
  return <></>;
}

export default function ChatSupport() {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value) => console.log(value);
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
    <div className="flex gap-2 ">
      <Card>
        <div className="flex flex-col">
          <div className="mx-2 flex pt-1">
            <div className="flex w-72 flex-row rounded-md shadow-sm">
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

          <div className="mx-2 flex pt-1">
            <div className="flex w-72 flex-row rounded-md shadow-sm">
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
          <div className="mx-2 flex pt-1">
            <div className="flex w-72 flex-row rounded-md shadow-sm">
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
      </Card>
      <div className="w-full bg-white">
        <Card className="rounded-md">
          <div className="flex p-2">
            <div className="flex grow justify-center bg-white p-2" size="large">
              <span>10:00</span>
            </div>
          </div>
          <div className=" flex items-end gap-2 p-4">
            <Avatar
              size="medium"
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <Card
              className="p-3 shadow-sm"
              style={{
                width: 250,
              }}
              cover={<img alt="example" src="/assets/images/product.png" />}
            ></Card>
          </div>
          <div className="row-end-1 flex justify-end p-4">
            <Card
              className="row-end-1 shadow-sm md:w-32"
              style={{
                width: 300,
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porta massa sapien. Suspendisse iaculis tellus lacus, ac
                facilisis massa maximus vitae. Proin posuere nec nisl eu
                eleifend. Mauris imperdiet egestas posuere. Aenean at iaculis
                nunc. Suspendisse luctus dolor sed nulla elementum ultrices.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi sit amet tortor vel orci rutrum
                condimentum iaculis eget est.
              </p>
            </Card>
          </div>
          <div className="justify-s flex items-end gap-2 p-4">
            <Avatar
              size="medium"
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <Card
              className="shadow-sm"
              style={{
                width: 300,
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porta massa sapien. Suspendisse iaculis tellus lacus, ac
                facilisis massa maximus vitae. Proin posuere nec nisl eu
                eleifend. Mauris imperdiet egestas posuere. Aenean at iaculis
                nunc. Suspendisse luctus dolor sed nulla elementum ultrices.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi sit amet tortor vel orci rutrum
                condimentum iaculis eget est.
              </p>
            </Card>
          </div>
          <div className="sticky bottom-2 bg-white pl-2">
            <div className="">
              <Input.Group className="">
                <Input
                  className=""
                  size="large"
                  style={{
                    width: "calc(100% - 50px)",
                  }}
                  placeholder="Type a message..."
                />
                <Button className="border-none" size="large">
                  <SendOutlined />
                </Button>
              </Input.Group>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
