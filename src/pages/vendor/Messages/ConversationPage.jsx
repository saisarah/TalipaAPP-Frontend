import Conversation from "@/components/messages/Conversation";
import SendMessage from "@/components/messages/SendMessage";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useThreadInfo } from "@/hooks/useThreadInfo";
import useReadThread from "@/query/mutations/useReadThread";
import { useThreadQuery } from "@/query/queries/useThreadsQuery";
import SkeletonInput from "antd/lib/skeleton/Input";
import { useParams } from "react-router";

export default function ConversationPage() {
  const { id } = useParams();
  const { data: thread, isLoading: isThreadLoading } = useThreadQuery(id);
  const { avatar, name } = useThreadInfo(thread);
  useReadThread(id)
  return (
    <div className="absolute inset-0 md:static flex-grow flex flex-col bg-white">
      <PageHeader
        back={"/messages"}
        backProps={{ className: "md:hidden" }}
        title={isThreadLoading ? <SkeletonInput /> : name}
      />
      <Conversation id={id} avatar={avatar} />
      <SendMessage id={id} />
    </div>
  );
}
