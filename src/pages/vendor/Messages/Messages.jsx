import { fetchMessages } from "@/apis/MessageApi";
import MessageItem from "@/components/MessageItem";
import { useTitle } from "@/contexts/VendorContext";
import { useQuery } from "@tanstack/react-query";
import { Empty, Spin } from "antd";
import ReactLogo from "./svg/mobile.svg";

export default function Messages() {
  const { data, isLoading } = useQuery(fetchMessages.key, fetchMessages);

  useTitle("Chat");

  if (isLoading)
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  return (
    <div>
      <Empty
        image={ReactLogo}
        imageStyle={{
          height: 300,
        }}
        description="No Massages"
        style={{
          padding: "100px",
        }}
      ></Empty>
      {data.map((item) => (
        <MessageItem
          to={`/messages/${item.id}`}
          key={item.id}
          fullname={item.fullname}
          avatar={item.profile_picture}
        />
      ))}
    </div>
  );
}
