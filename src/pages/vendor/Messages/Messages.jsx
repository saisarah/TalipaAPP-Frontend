import MessageItem from "@/components/messages/MessageItem";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import VendorPageHeader from "@/components/PageHeader/VendorPageHeader";
import VendorPage from "@/components/VendorPage";
import { useTitle } from "@/contexts/VendorContext";
import Chat from "@/pages/farmer/Messages/Chat";
import { useMessagesQuery } from "@/query/queries/useMessagesQuery";
import { Spin } from "antd";
import ReactLogo from "./svg/mobile.svg";

export default function Messages({ chat }) {
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
    <Page className="flex flex-grow flex-col md:p-4">
      {/* <VendorPageHeader back="/farmer" title="Messages" /> */}

      <div className="flex flex-grow overflow-hidden border-slate-200 bg-white md:rounded-lg md:border">
        <div className="w-full border-r border-slate-200 md:w-[40%]">
          <div className="hidden md:block">
            <PageHeader title="Conversations" />
          </div>
          {data.map((item) => (
            <MessageItem
              key={item.id}
              to={`/messages/${item.id}`}
              avatar={item.profile_picture}
              fullname={item.fullname}
            />
          ))}
        </div>
        <div className="relative hidden flex-grow md:block">
          {chat && <Chat {...chat} />}
        </div>
      </div>
    </Page>
  );
}
