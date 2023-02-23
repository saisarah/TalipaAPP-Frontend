import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { Avatar, Button, Input, Spin } from "antd";
import React from "react";
import { Empty } from "antd";
import {
  AudioOutlined,
  SendOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import Http from "@/helpers/Http";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const fetchMessages = async (id) => {
  const result = await Http.get(`/messages/${id}`);
  return result.data;
};

const fethUser = async (id) => {
  const result = await Http.get(`/users/${id}`);
  return result.data;
};

export default function PrivateMessage() {
  const params = useParams();
  const { data, isLoading } = useQuery(["messages", params.id], () =>
    fetchMessages(params.id)
  );
  const { data: user, isLoading: isUserLoading } = useQuery(
    ["users", params.id],
    () => fethUser(params.id)
  );

  if (isLoading || isUserLoading)
    return (
      
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  const App = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  const onSearch = (value) => console.log(value);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  return (
    <div className="app-size flex flex-col bg-white">
      <PageHeader back="/farmer/chat" title={user.fullname} />
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
            <ShoppingCartOutlined key="ShoppingCart" />,
            <DeleteOutlined key="Delete" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta title="Garlic" description="Price: 750.00 Pesos" />
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
            porta massa sapien. Suspendisse iaculis tellus lacus, ac facilisis
            massa maximus vitae. Proin posuere nec nisl eu eleifend. Mauris
            imperdiet egestas posuere. Aenean at iaculis nunc. Suspendisse
            luctus dolor sed nulla elementum ultrices. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Morbi sit amet tortor vel orci rutrum condimentum iaculis eget est.
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
            porta massa sapien. Suspendisse iaculis tellus lacus, ac facilisis
            massa maximus vitae. Proin posuere nec nisl eu eleifend. Mauris
            imperdiet egestas posuere. Aenean at iaculis nunc. Suspendisse
            luctus dolor sed nulla elementum ultrices. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Morbi sit amet tortor vel orci rutrum condimentum iaculis eget est.
          </p>
        </Card>
      </div>
      <div className="sticky bottom-2 left-0 right-0 bg-white pl-2">
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
    </div>
  );
}
