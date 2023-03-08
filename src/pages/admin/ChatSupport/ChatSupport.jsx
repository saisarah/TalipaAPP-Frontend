import UserOutlined from "@/icons/heroicons/UserOutlined";
import {
  AudioOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  SendOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Input, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import Search from "antd/lib/transfer/search";
import React from "react";

function User({ name, chat, email, time }) {
  return (
    <>
      {/* <div className="flex">
        <Avatar className="h-10 w-10" />
        <div className="ml-2 flex flex-col">
          <span className="font-bold">{name}</span>
          <span className="leading-tight text-slate-400">{email}</span>
          <span className="whitespace-nowrap">{chat}</span>
        </div>
      </div> */}
    </>
  );
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
              cover={<img alt="example" src="/assets/images/garlic.png" />}
              actions={[
                // <ShoppingCartOutlined key="ShoppingCart" />,
                // <DeleteOutlined key="Delete" />,
                // <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              {/* <Meta title="Garlic" description="Price: 750.00 Pesos" /> */}
            </Card>
          </div>
          <div className="row-end-1 flex justify-end p-4">
            <Card
              className="row-end-1 shadow-sm"
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
    // <div className="flex">
    //   <div className="flex flex-none">
    //     <Card>
    //       <div className=" border-slate-400">
    //         <div className="m-2 w-auto">
    //           <Search
    //             placeholder="input search text"
    //             onSearch={onSearch}
    //             style={{ width: 200 }}
    //           />
    //         </div>
    //         <div className="px-2">
    //           <User
    //             name={"Ericka"}
    //             email={"ericka@gmail.com"}
    //             chat={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
    //           />
    //           <User
    //             name={"Ericka"}
    //             email={"ericka@gmail.com"}
    //             chat={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
    //           />
    //           <User
    //             name={"Ericka"}
    //             email={"ericka@gmail.com"}
    //             chat={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
    //           />
    //         </div>
    //       </div>
    //     </Card>
    //   </div>
    /* <div className="ml-2 flex w-full grow border-slate-400">
        <Card>
          <div className="my-2 ">
            <span className="border-b-2 pb-2 text-lg font-bold">
              Juan Paolo Ortega
            </span>
          </div>
          <div className="my-2 items-center">
            <Avatar className="mt-2 h-10 w-10" />
            <span className="mx-2 items-center"> Hello there brother!</span>
          </div>
          <div className="flex flex-row-reverse items-center">
            <Avatar className="mt-2 h-10 w-10" />
            <span className="mx-2 items-center"> Hello there brother!</span>
          </div>
        </Card>
      </div> */

    // </div>
  );
}
