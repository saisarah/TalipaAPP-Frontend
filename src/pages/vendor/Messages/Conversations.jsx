import { ReceivedChat, SentChat } from "@/components/ChatItem";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import SendMessage from "@/components/SendMessage";
import { useConversationsQuery } from "@/query/queries/useMessagesQuery";
import { useUserQuery } from "@/query/queries/useUsersQuery";
import { Spin } from "antd";
import { useParams } from "react-router";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Conversations() {
  const { id } = useParams();
  const { data, isLoading } = useConversationsQuery(id);
  const { data: user, isLoading: isUserLoading } = useUserQuery(id);
  if (isLoading || isUserLoading)
    return (
      <Page>
        <PageHeader back="/messages" title="Loading" />
        <div className="flex flex-col items-center py-16">
          <Spin />
        </div>
      </Page>
    );

  return (
    <div className="app-size flex max-h-screen flex-col bg-white">
      <PageHeader back="/messages" title={user.fullname} />

      <ScrollToBottom className="talipaapp-scrollbar flex flex-1 flex-grow flex-col-reverse overflow-y-auto">
        <div className="mb-4">
          {data.map((item) =>
            id == item.receiver_id ? (
              <SentChat key={item.id} content={item.content} />
            ) : (
              <ReceivedChat
                key={item.id}
                avatar={user.profile_picture}
                content={item.content}
              />
            )
          )}
        </div>
      </ScrollToBottom>
      <SendMessage id={id} />
    </div>
  );
}
