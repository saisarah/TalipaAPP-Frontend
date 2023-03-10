import Conversation from "@/components/messages/Conversation";
import SendMessage from "@/components/messages/SendMessage";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { useUserQuery } from "@/query/queries/useUsersQuery";
import SkeletonInput from "antd/lib/skeleton/Input";
import { useParams } from "react-router";

export default function Chat() {
  const { id } = useParams();
  const { data: user, isLoading: isUserLoading } = useUserQuery(id);

  return (
    <Page className="flex h-full max-h-screen flex-col bg-white">
      <PageHeader
        back="/farmer/messages"
        title={isUserLoading ? <SkeletonInput /> : user.fullname}
      />
      <Conversation id={id} avatar={user?.profile_picture} />
      <SendMessage id={id} />
    </Page>
  );
}
