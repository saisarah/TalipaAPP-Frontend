import MessageItem from "@/components/messages/MessageItem";
import Conversation from "@/components/messages/Conversation";
import SendMessage from "@/components/messages/SendMessage";
import Page from "@/components/Page";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useMessagesQuery } from "@/query/queries/useMessagesQuery";
import { useUserQuery } from "@/query/queries/useUsersQuery";
import { Spin } from "antd";
import SkeletonInput from "antd/lib/skeleton/Input";
import { useParams } from "react-router-dom";
import ReactLogo from "./img/mobile.svg";
// import Chat from './Chat'

const Chat = ({ id }) => {
  const { data: user, isLoading: isUserLoading } = useUserQuery(id);

  return (
    <Page className="flex overflow-y-auto flex-col absolute inset-0 bg-white flex-grow">
      <PageHeader
        title={isUserLoading ? <SkeletonInput /> : user.fullname}
      />
      <Conversation id={id} avatar={user?.profile_picture} />
      <SendMessage id={id} />
    </Page>
  );
};

export default function Messages() {
  const { id } = useParams();
  const { data, isLoading } = useMessagesQuery();

  if (isLoading)
    return (
      <Page>
        <FarmerPageHeader back="/farmer" title="Messages" />
        <div className="flex flex-col items-center py-16">
          <Spin />
        </div>
      </Page>
    );

  if (data.length == 0)
    return (
      <Page>
        <FarmerPageHeader back="/farmer" title="Messages" />
        <div className="flex flex-col items-center py-40">
          <img width="200" height="100" src={ReactLogo} alt="" />
          <span className="px-24 text-center text-sm">
            You have no messages.
          </span>
        </div>
      </Page>
    );

  return (
    <Page className="flex flex-grow flex-col md:p-4">
      <FarmerPageHeader back="/farmer" title="Messages" />

      <div className="flex flex-grow md:rounded-lg md:border border-slate-200 bg-white overflow-hidden">
        <div className="w-full md:w-[40%] border-r border-slate-200">
          <div className="hidden md:block">
            <PageHeader title="Conversations" />
          </div>
          {data.map((item) => (
            <MessageItem
              key={item.id}
              to={`/farmer/messages/${item.id}`}
              avatar={item.profile_picture}
              fullname={item.fullname}
            />
          ))}
        </div>
        <div className="hidden md:block flex-grow relative">
        {id && <Chat id={id} />}
        </div>
      </div>
    </Page>
  );
}
