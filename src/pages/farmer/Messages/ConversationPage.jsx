import Conversation from "@/components/messages/Conversation";
import SendMessage from "@/components/messages/SendMessage";
import Threads from "@/components/messages/Threads";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useAppContext } from "@/contexts/AppContext";
import { useThreadInfo } from "@/hooks/useThreadInfo";
import { useThreadQuery } from "@/query/queries/useThreadsQuery";
import SkeletonInput from "antd/lib/skeleton/Input";
import { Fragment } from "react";
import { useParams } from "react-router";

export const ConversationPage = () => {
  const { id } = useParams();
  const { data:thread, isLoading: isThreadLoading } = useThreadQuery(id)
  const { avatar, name } = useThreadInfo(thread)
  const { viewport } = useAppContext()
  
  const Wrapper = viewport.isMedium ? Threads : Fragment

  return (
    <div className="flex flex-grow flex-col md:p-4">
      <Wrapper>
        <Page className="absolute inset-0 flex flex-col bg-white">
          <PageHeader
            back={"/farmer/messages"}
            backProps={{className: 'md:hidden'}}
            title={isThreadLoading ? <SkeletonInput /> : name}
          />
          <Conversation id={id} avatar={avatar} />
          <SendMessage id={id} />
        </Page>
      </Wrapper>
    </div>
  );
};

