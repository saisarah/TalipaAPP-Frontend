import Conversation from "@/components/messages/Conversation";
import SendMessage from "@/components/messages/SendMessage";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { useConversationsQuery } from "@/query/queries/useMessagesQuery";
import { useUserQuery } from "@/query/queries/useUsersQuery";
import { Spin } from "antd";
import SkeletonInput from "antd/lib/skeleton/Input";
import { useParams } from "react-router";

export default function Chat() {
  const { id } = useParams();
  const { data, isLoading } = useConversationsQuery(id);
  const { data: user, isLoading: isUserLoading } = useUserQuery(id);

  console.log({ data, isLoading });
  // if (isLoading || isUserLoading)
  //   return (
  //     <Page>
  //       <PageHeader back="/farmer/chat" title="Chat" />
  //       <div className="flex flex-col items-center py-16">
  //         <Spin />
  //       </div>
  //     </Page>
  //   );
  // if (isLoading) return null;

  return (
    <Page className="flex h-full max-h-screen flex-col bg-white">
      <PageHeader
        back="/farmer/messages"
        title={isUserLoading ? <SkeletonInput /> : user.fullname}
      />
      {isLoading ? (
        <Spin
          className="flex flex-grow items-center justify-center"
          tip="Fetching messages"
        />
      ) : (
        <Conversation messages={data} user={user} />
      )}
      <SendMessage id={id} />
    </Page>
  );
}
