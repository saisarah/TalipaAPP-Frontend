import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { TabLinks } from "@/components/TabLink";
import { useTabAdvance } from "@/helpers/hooks";
import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Forum from "./components/Forum";
import Join from "./components/Join";
import SuggestedGroups from "./components/SuggestedGroups";
import GroupInvitation from "./GroupInvitation";
import groupIllustrationImg from "./images/group_illustration.png";

const HAS_INVITATION = false;

const fetchCurrentGroup = async () => {
  const { data } = await Http.get('/farmer-group')
  return data
}

const fetchGroupInvitations = async () => {
  const { data } = await Http.get('/farmer-groups/invitations')
  return data
}

const fetchPendingGroup = async () => {
  const { data } = await Http.get('/farmer-group/pending')
  return data
}

const useCurrentGroup = () => {
  return useQuery(['farmer-group'], fetchCurrentGroup)
}

const useGroupInvitations = (option) => {
  return useQuery(['farmer-groups', 'invitations'], fetchGroupInvitations, option)
}

const usePendingGroup = () => {
  return useQuery(['farmer-group', 'pending'], fetchPendingGroup)
}



const PendingRequest = () => {
  const { data, isLoading } = usePendingGroup()

  const { outlet, tabs } = useTabAdvance({
    join: {
      title: "Join",
      element: data && <Join data={data} />,
    },
    forum: {
      title: "Forum",
      element: <Forum />,
    },
  });

  if (isLoading)
    return "Fetching Loading group"

  if (!data)
    return <SuggestedGroups />

    return (
      <div className="app-size bg-white">
        <PageHeader back="/farmer" title="Pending Request" />
  
        <div className="h-[80px] w-[100%] max-w-md flex-shrink-0 bg-slate-300"></div>
        <img
          className="mx-auto h-[75px] w-[75px] max-w-md flex-shrink-0 rounded-full bg-slate-300 ring"
          style={{ marginTop: "-45px" }}
        />
        <div className="my-6 text-center">
          <h1>{data.name}</h1>
          <h1>{data.type}</h1>
          <p>Members</p>
          <Button  className="mx-auto">
            Cancel Request
          </Button>
        </div>
  
        <TabLinks
          activeClassName="border-b border-primary text-primary"
          defaultClassName="flex items-center justify-center"
          className="sticky top-0 grid h-16 grid-cols-2 bg-white text-lg shadow-md"
          tabs={tabs}
        />
        {outlet}
      </div>
    );
  
}

const GroupInvitations = () => {
  const { data, isLoading } = useGroupInvitations()

  if (isLoading)
    return "Fetching invitations"

  if (data.length === 0)
    return <PendingRequest />

  return "Invitations"

}

export default function Group()
{
  const { data, isLoading } = useCurrentGroup()

  if (isLoading)
    return "Loading"

  if (!data)
    return <GroupInvitations />

  return "Group Page"

}
// export default function Group() {
//   const { data: currentGroup, isSuccess, isLoading: fetchingCurrentGroup } = useCurrentGroup() 

//   const { data: invitations, isLoading } = useGroupInvitations({
//     enabled: isSuccess && !currentGroup
//   })

//   if (currentGroup) {
//     return "Has Group"
//   }

//   if (HAS_INVITATION) return <GroupInvitation />;

//   return (
//     <Page className="bg-white">
//       <PageHeader back="/farmer" title="Farmer Groups" />

//       <div className="shadow-xs border-b bg-white p-4">
//         <div className="text-lg font-bold">Create</div>
//         <div className="mt-2 text-center">
//           Farmer groups are group of individual farmers, an association,
//           cooperative or any legal entity with a common farming interest.
//         </div>
//         <Link to="/farmer/groups/new" className="mt-6 flex justify-center">
//           <Button className="rounded" type="primary">
//             Create
//           </Button>
//         </Link>
//       </div>

//       <div className="p-4 text-lg font-bold ">Suggested Groups</div>

//       <SuggestedGroups />
//     </Page>
//   );
// }
