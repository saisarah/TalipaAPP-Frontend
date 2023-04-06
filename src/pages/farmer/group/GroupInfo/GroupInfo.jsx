import PageHeader from "@/components/PageHeader/PageHeader";
import { TabLinks } from "@/components/TabLink";
import { useTabAdvance } from "@/helpers/hooks";
import Http, { getErrorMessage } from "@/helpers/Http";
import { useFarmerGroupQuery } from "@/query/queries/useFarmerGroupsQuery";
import { useMutation } from "@tanstack/react-query";
import { Button, notification, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Forum from "../components/Forum";
import Join from "../components/Join";

const joinGroup = async(id) => {
  const { data } = await Http.post(`/farmer-groups/${id}/join`)
  return data
}

const useJoinGroup = (id, option) => {
  return useMutation(() => joinGroup(id), option)
}

export default function GroupInfo() {
  const navigate = useNavigate()
  const { id } = useParams();
  const { mutate, isLoading: isJoining } = useJoinGroup(id, {
    onSuccess() {
      navigate("/farmer/groups")
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  })

  const { data, isLoading } = useFarmerGroupQuery(id);

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

  if (isLoading) {
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );
  }

  return (
    <div className="app-size bg-white">
      <PageHeader back="/farmer/groups" title="Group" />

      <div className="h-[80px] w-[100%] max-w-md flex-shrink-0 bg-slate-300"></div>
      <img
        className="mx-auto h-[75px] w-[75px] max-w-md flex-shrink-0 rounded-full bg-slate-300 ring"
        style={{ marginTop: "-45px" }}
      />
      <div className="my-6 text-center">
        <h1>{data.name}</h1>
        <h1>{data.type}</h1>
        <p>Members</p>
        <Button loading={isJoining} onClick={() => mutate()} type="primary" className="mx-auto">
          Join
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
