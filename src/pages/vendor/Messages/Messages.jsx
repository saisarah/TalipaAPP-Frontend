import MessageItem from "@/components/messages/MessageItem";
import { useTitle } from "@/contexts/VendorContext";
import { useMessagesQuery } from "@/query/queries/useMessagesQuery";
import { Spin } from "antd";
import ReactLogo from "./svg/mobile.svg";

export default function Messages() {
  const { data, isLoading } = useMessagesQuery();

  useTitle("Chat");

  if (isLoading)
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );
  if (data.length == 0)
    return (
      <div className="flex flex-col items-center py-40">
        <img width="200" height="100" src={ReactLogo} alt="" />
        <span className="px-24 text-center text-sm">You have no messages.</span>
      </div>
    );
  return (
    <div>
      {/* <Empty
        image={ReactLogo}
        imageStyle={{
          height: 300,
        }}
        description="No Massages"
        style={{
          padding: "100px",
        }}
      ></Empty> */}
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
