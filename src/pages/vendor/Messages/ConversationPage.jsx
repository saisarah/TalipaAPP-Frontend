import Conversation from "@/components/messages/Conversation";
import SendMessage from "@/components/messages/SendMessage";
import PageHeader from "@/components/PageHeader/PageHeader";
import Http from "@/helpers/Http";
import { useThreadInfo } from "@/hooks/useThreadInfo";
import useReadThread from "@/query/mutations/useReadThread";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { useThreadQuery } from "@/query/queries/useThreadsQuery";
import { PhoneFilled } from "@ant-design/icons";
import { JaaSMeeting, JitsiMeeting } from "@jitsi/react-sdk";
import { useMutation } from "@tanstack/react-query";
import { Button } from "antd";
import SkeletonInput from "antd/lib/skeleton/Input";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

const generateToken = async (id) => {
  const { data } = await Http.post(`/jitsi/${id}`);
  return data;
};

const useGenerateToken = (id) => {
  return useMutation(() => generateToken(id));
};

function CallUser({ id }) {
  const { data: token, mutate, isLoading } = useGenerateToken(id);
  const { data:user } = useCurrentUserQuery()
  
  useEffect(() => {
    if (!token && id) {
      mutate();
    }
  }, [token, id]);

  return (
    <div className="fixed inset-0 z-20 bg-white">
      {isLoading && "Connecting..."}
      {token && (
        <JaaSMeeting
          // domain="code.talipaapp.com"
          appId="vpaas-magic-cookie-7a745c1e9fdc4357bd854cddb713a42d"
          jwt={token[0]}
          roomName="TalipaAPP Video Conference"
          configOverwrite={{
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: false,
            enableEmailInStats: false,
            prejoinPageEnabled: false,
          }}
          userInfo={{
            displayName: user.fullname,
          }}
          getIFrameRef = { (iframeRef) => { 
            iframeRef.style.height = '100%'; 
          }}
        />
      )}
    </div>
  );

  // return (
  //   <div className="fixed inset-0 z-20 bg-white">
  //     {isLoading && "Connecting..."}
  //     <div className="h-full" ref={meet} style={{ display: token ? "block" : "hidden" }}></div>
  //   </div>
  // );
}

export default function ConversationPage() {
  const { id } = useParams();
  const { data: thread, isLoading: isThreadLoading } = useThreadQuery(id);
  const { avatar, name, user_id } = useThreadInfo(thread);
  const [call, setCall] = useState(false)

  useReadThread(id);

  return (
    <div className="absolute inset-0 flex flex-grow flex-col bg-white md:static">
      <PageHeader
        back={"/messages"}
        backProps={{ className: "md:hidden" }}
        title={isThreadLoading ? <SkeletonInput /> : name}
        right={<Button onClick={() => setCall(true)} type="text" icon={<PhoneFilled />} />}
      />
      <Conversation id={id} avatar={avatar} />
      <SendMessage id={id} />
      {call && <CallUser id={user_id} />}
    </div>
  );
}
