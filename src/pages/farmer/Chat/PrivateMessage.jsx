import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { Avatar, Button, Card, Input } from "antd";
import React from "react";
import { Empty } from "antd";
import {
  AudioOutlined,
  DeleteOutlined,
  EllipsisOutlined,
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

// test AICommits
export default function PrivateMessage() {
  const params = useParams();
  const { data, isLoading } = useQuery(["messages", params.id], () =>
    fetchMessages(params.id)
  );
  if (isLoading) return "Loading...";

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
  // <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />,
  return (
    <div className="app-size flex flex-col bg-white">
      <PageHeader back="/farmer/chat" title="Commonwealt Market Quezon City." />
      <div className="flex p-2">
        <div className="flex grow justify-center bg-white p-2" size="large">
          <span>10:00</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col-reverse">
        <div className="mb-4">
          {data.map((item) =>
            params.id == item.receiver_id ? (
              <div key={item.id} className="row-end-1 flex justify-end p-4">
                <Card
                  className="row-end-1 shadow-sm"
                  style={{
                    width: 300,
                  }}
                >
                  <p>{item.content}</p>
                </Card>
              </div>
            ) : (
              <div
                key={item.id}
                className="flex items-end justify-start gap-2 p-4"
              >
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
                  <p>{item.content}</p>
                </Card>
              </div>
            )
          )}
        </div>
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
