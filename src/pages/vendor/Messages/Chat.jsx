import Conversation from "@/components/messages/Conversation";
import SendMessage from "@/components/messages/SendMessage";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import VendorPage from "@/components/VendorPage";
import { useAppContext } from "@/contexts/AppContext";
import { useUserQuery } from "@/query/queries/useUsersQuery";
import SkeletonInput from "antd/lib/skeleton/Input";
import { useParams } from "react-router";
import Messages from "./Messages";

export const ChatPage = () => {
  const { viewport } = useAppContext()
  const { id } = useParams();
  const { data: user, isLoading: isUserLoading } = useUserQuery(id);

  const chat = {id, user, isUserLoading}

  if (viewport.isMedium) 
    return <Messages chat={chat} />
  return <Chat {...chat} />
}

export default function Chat({ id, user, isUserLoading }) {

  return (
    <VendorPage className="flex h-full max-h-screen flex-col bg-white">
      <PageHeader
        back="/messages"
        title={isUserLoading ? <SkeletonInput /> : user.fullname}
      />
      <Conversation id={id} avatar={user?.profile_picture} />
      <SendMessage id={id} />
    </VendorPage>
  );
}
