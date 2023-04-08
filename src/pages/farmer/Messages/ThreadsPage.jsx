import Threads from "@/components/messages/Threads";
import Page from "@/components/Page";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";
// import Chat from "./Chat";



export default function ThreadsPage() {
  return (
    <Page className="flex flex-grow flex-col md:p-4">
      <FarmerPageHeader back="/farmer" title="Messages" />
      <Threads>
        <div className="flex flex-grow flex-col items-center justify-center text-gray-400">
          <span className="text-6xl">
            <MessageOutlined />
          </span>
          <span className="mt-4 text-xl">Your Messages</span>
          <span>Send a private message to others.</span>
          <Button shape="round" type="primary" className="mt-4">
            Send Message
          </Button>
        </div>
      </Threads>
    </Page>
  );
}

// export default function Threads({ chat }) {
//   const { data, isLoading } = useThreadsQuery();

//   if (isLoading)
//     return (
//       <Page>
//         <FarmerPageHeader back="/farmer" title="Messages" />
//         <div className="flex flex-col items-center py-16">
//           <Spin />
//         </div>
//       </Page>
//     );

//   if (data.length == 0)
//     return (
//       <Page>
//         <FarmerPageHeader back="/farmer" title="Messages" />
//         <div className="flex flex-col items-center py-40">
//           <img width="200" height="100" src={ReactLogo} alt="" />
//           <span className="px-24 text-center text-sm">
//             You have no messages.
//           </span>
//         </div>
//       </Page>
//     );

//   return (
//     <Page className="flex flex-grow flex-col md:p-4">
//       <FarmerPageHeader back="/farmer" title="Messages" />

//       <div className="flex flex-grow overflow-hidden border-slate-200 bg-white md:rounded-lg md:border">
//         <div className="w-full border-r border-slate-200 md:w-[40%]">
//           <div className="hidden md:block">
//             <PageHeader title="Conversations" />
//           </div>
//           {data.map((item) => (
//             <MessageItem
//               key={item.id}
//               to={`/farmer/messages/${item.id}`}
//               thread={item}
//             />
//           ))}
//         </div>
//         <div className="relative hidden flex-grow md:block">
//           {chat && <Chat {...chat} />}
//         </div>
//       </div>
//     </Page>
//   );
// }
